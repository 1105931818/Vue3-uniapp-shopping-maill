import { defineStore } from "pinia";
import { ref } from "vue";
import type { LoginResult } from "@/types/member";


export const useStore = defineStore(
    'member',
    () => {
        //用户信息
        const userInfo = ref<LoginResult>();

        //保护用户信息
        const setProfile = (data: LoginResult) => {
            userInfo.value = data;
        }

        //清除用户信息
        const clearProfile = () => {
            userInfo.value = undefined;
        }

        return {
            userInfo,
            setProfile,
            clearProfile
        }
    },
    {
        //数据持久化，网页端配置
        //persist: true,

        //数据持久化，小程序配置
        persist: {
            storage: {
                getItem: (key: string) => uni.getStorageSync(key),
                setItem: (key: string, value: any) => uni.setStorageSync(key, value),
            }
        }
    }
);