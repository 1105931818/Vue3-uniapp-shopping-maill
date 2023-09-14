
const allGloablComponent: any = {};

export default {
    install(app: any) {
        Object.keys(allGloablComponent).forEach((key: string) => {
            app.component(key, allGloablComponent[key]);
        })
    }
}