import { http } from "@/utils/http";
import type { LoginResult } from '@/types/member'

type LoginParams = {
    code: string;
    encryptedData: string;
    iv: string;
}

//目前该接口针对非个人开发者，且完成了认证的小程序开放
export const postLoginAPI = (data: LoginParams) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/login/wxMin',
        data
    })
}


//测试登录接口
export const postLoginSimpleAPI = (phoneNumber: string) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/login/wxMin/simple',
        data: {
            phoneNumber
        }
    })
}