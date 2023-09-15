import { useStore } from "@/pinia";

const baseURL = ''

/* 
    添加拦截器
        拦截request请求
        拦截uploadFile文件上传
*/
const httpInterceptor = {
    //拦截前触发
    invoke(options: UniApp.RequestOptions) {

        //非http开头需拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url;
        }

        //请求超时
        options.timeout = 10000;


        //添加小程序端请求头标识
        options.header = {
            ...options.header,
            'content-type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        }

        //添加token请求头标识
        const memberStore = useStore();
        const token = memberStore.userInfo?.token;
        if (token) {
            options.header['Authorization'] = token;
        }
    }
}

uni.addInterceptor('request', httpInterceptor);
uni.addInterceptor('uploadFile', httpInterceptor);

/**
 *请求函数
 *@param UniApp.RequestOptions
 *@returns Promise
*/

interface Data<T> {
    code: string;
    msg: string;
    result: T;
}

export const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        // 发起请求
        uni.request({
            ...options,
            success: (res: UniApp.RequestSuccessCallbackResult) => {
                // 成功回调
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    const data = res.data as Data<T>;
                    if (data.code === '200') {
                        resolve(data);
                    } else {
                        uni.showToast({
                            icon: 'none',
                            title: data.msg
                        })
                        reject(data);
                    }
                } else if (res.statusCode === 401) {
                    //token过期
                    const memberStore = useStore();
                    memberStore.clearProfile();
                    uni.navigateTo({ url: '/pages/user/user' });
                    uni.showToast({
                        icon: 'none',
                        title: '用户信息过期，请重新登录'
                    });
                    reject(res);
                } else {
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>).msg || '网络请求失败'
                    });
                    reject(res);
                }
                
            },
            fail: (err: UniApp.GeneralCallbackResult) => {
                // 失败回调
                uni.showToast({
                    icon: 'none',
                    title: '网络请求失败'
                })
                reject(err);
            }
            
        }); 
    })
}