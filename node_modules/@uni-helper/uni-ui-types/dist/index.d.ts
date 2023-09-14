import { AnyRecord, Component, BaseEvent, CustomEvent, InputOnFocusEvent, InputOnBlurEvent, InputType } from '@uni-helper/uni-app-types';

/**
 * 角标颜色类型
 *
 * default 灰色
 *
 * primary 蓝色
 *
 * success 绿色
 *
 * warning 黄色
 *
 * error 红色
 */
type _UniBadgeType = 'default' | 'primary' | 'success' | 'warning' | 'error';
/**
 * 角标大小
 *
 * normal 正常
 *
 * small 小
 */
type _UniBadgeSize = 'normal' | 'small';
/** 自定义样式 */
type _UniBadgeCustomStyle = AnyRecord;
/**
 * 开启绝对定位，角标将定位到其包裹的标签的四个角上
 *
 * rightTop 右上角
 *
 * rightBottom 右下角
 *
 * leftBottom 左下角
 *
 * leftTop 左上角
 */
type _UniBadgeAbsolute = 'rightTop' | 'rightBottom' | 'leftBottom' | 'leftTop';
/** 点击事件 */
interface _UniBadgeOnClick {
    (): void;
}
/** 数字角标属性 */
type _UniBadgeProps = Partial<{
    /** 角标内容 */
    text: string;
    /**
     * 角标颜色类型
     *
     * default 灰色
     *
     * primary 蓝色
     *
     * success 绿色
     *
     * warning 黄色
     *
     * error 红色
     *
     * 默认为 error
     */
    type: _UniBadgeType;
    /**
     * 角标大小
     *
     * normal 正常
     *
     * small 小
     *
     * 默认为 normal
     */
    size: _UniBadgeSize;
    /**
     * 是否只展示一个点不展示内容
     *
     * 默认为 false
     */
    isDot: boolean;
    /**
     * 展示封顶的数字值，超过后显示 封顶数字+
     *
     * 默认为 99
     */
    maxNum: number;
    /** 自定义样式 */
    customStyle: _UniBadgeCustomStyle;
    /**
     * 是否无需背景颜色
     *
     * true 背景颜色将变为文字的字体颜色
     *
     * false 正常显示
     *
     * 默认为 false
     */
    inverted: boolean;
    /**
     * 开启绝对定位，角标将定位到其包裹的标签的四个角上
     *
     * rightTop 右上角
     *
     * rightBottom 右下角
     *
     * leftBottom 左下角
     *
     * leftTop 左上角
     */
    absolute: _UniBadgeAbsolute;
    /**
     * 距定位角中心点的偏移量
     *
     * -10, -10 表示向 absolute 指定的方向偏移 10px
     *
     * 10, 10 表示向 absolute 指定的反方向偏移 10px
     *
     * 与 absolute 一一对应
     *
     * 存在 absolute 属性时有效
     *
     * 单位为 px
     *
     * 默认为 [0, 0]
     */
    offset: [number, number];
    /** 点击事件 */
    onClick: _UniBadgeOnClick;
}>;
/**
 * 数字角标
 *
 * 一般和其它控件（列表、九宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
 */
type _UniBadge = Component<_UniBadgeProps>;
/** 数字角标实例 */
type _UniBadgeInstance = InstanceType<_UniBadge>;

declare global {
    namespace UniHelper {
        /**
         * 角标颜色类型
         *
         * default 灰色
         *
         * primary 蓝色
         *
         * success 绿色
         *
         * warning 黄色
         *
         * error 红色
         */
        type UniBadgeType = _UniBadgeType;
        /**
         * 角标大小
         *
         * normal 正常
         *
         * small 小
         */
        type UniBadgeSize = _UniBadgeSize;
        /** 自定义样式 */
        type UniBadgeCustomStyle = _UniBadgeCustomStyle;
        /**
         * 开启绝对定位，角标将定位到其包裹的标签的四个角上
         *
         * rightTop 右上角
         *
         * rightBottom 右下角
         *
         * leftBottom 左下角
         *
         * leftTop 左上角
         */
        type UniBadgeAbsolute = _UniBadgeAbsolute;
        /** 点击事件 */
        interface UniBadgeOnClick extends _UniBadgeOnClick {
        }
        /** 数字角标属性 */
        type UniBadgeProps = _UniBadgeProps;
        /**
         * 数字角标
         *
         * 一般和其它控件（列表、九宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
         */
        type UniBadge = _UniBadge;
        /** 数字角标实例 */
        type UniBadgeInstance = _UniBadgeInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /**
         * 数字角标
         *
         * 一般和其它控件（列表、九宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
         */
        UniBadge: _UniBadge;
    }
}

/** 面包屑属性 */
type _UniBreadcrumbProps = Partial<{
    /**
     * 分隔符
     *
     * 默认为 /
     */
    separator: string;
    /** 分隔符类名 */
    separatorClass: string;
}>;
/**
 * 面包屑
 *
 * 显示当前页面的路径，快速返回之前的任意页面
 */
type _UniBreadcrumb = Component<_UniBreadcrumbProps>;
/** 面包屑实例 */
type _UniBreadcrumbInstance = InstanceType<_UniBreadcrumb>;

declare global {
    namespace UniHelper {
        /** 面包屑属性 */
        type UniBreadcrumbProps = _UniBreadcrumbProps;
        /**
         * 面包屑
         *
         * 显示当前页面的路径，快速返回之前的任意页面
         */
        type UniBreadcrumb = _UniBreadcrumb;
        /** 面包屑实例 */
        type UniBreadcrumbInstance = _UniBreadcrumbInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /**
         * 面包屑
         *
         * 显示当前页面的路径，快速返回之前的任意页面
         */
        UniBreadcrumb: _UniBreadcrumb;
    }
}

type _UniBreadcrumbItemProps = Partial<{
    /** 路由跳转页面路径 */
    to: string;
    /**
     * 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录
     *
     * 默认为 false
     */
    replace: boolean;
}>;
type _UniBreadcrumbItem = Component<_UniBreadcrumbItemProps>;
type _UniBreadcrumbItemInstance = InstanceType<_UniBreadcrumbItem>;

declare global {
    namespace UniHelper {
        type UniBreadcrumbItemProps = _UniBreadcrumbItemProps;
        type UniBreadcrumbItem = _UniBreadcrumbItem;
        type UniBreadcrumbItemInstance = _UniBreadcrumbItemInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniBreadcrumbItem: _UniBreadcrumbItem;
    }
}

/**
 * 日期
 *
 * 格式为 YYYY-MM-DD
 */
type _UniCalendarDate = string;
/** 打点项 */
interface _UniCalendarSelectedElement {
    /** 日期 */
    date: _UniCalendarDate;
    /** 信息 */
    info: string;
    /** 自定义数据 */
    data: AnyRecord;
}
/** 打点 */
type _UniCalendarSelected = _UniCalendarSelectedElement[];
/**
 * 弹出日历组件
 *
 * insert 为 true 时有效
 */
interface _UniCalendarOpen {
    (): void;
}
interface _UniCalendarBaseEvent {
    /** 选择的范围 */
    range: {
        /** 范围开始日期 */
        before: _UniCalendarDate;
        after: _UniCalendarDate;
        data: _UniCalendarDate[];
    };
    /** 当前年 */
    year: number;
    /** 当前月 */
    month: number;
    /** 当前日 */
    date: number;
    /** 农历信息 */
    lunar: {
        /** 农历当前年 */
        lYear: number;
        /** 农历当前月 */
        lMonth: number;
        /** 农历当前日 */
        lDay: number;
        /** 生肖 */
        Animal: string;
        /** 农历当前月中文表示 */
        IMonthCn: string;
        /** 农历当前日中文表示 */
        IDayCn: string;
        /** 公历当前年 */
        cYear: number;
        /** 公历当前月 */
        cMonth: number;
        /** 公历当前日 */
        cDay: number;
        /** 农历当前年中文天干地支表示 */
        gzYear: string;
        /** 农历当前月中文天干地支表示 */
        gzMonth: string;
        /** 农历当前日中文天干地支表示 */
        gzDay: string;
        /** 是否今天 */
        isToday: boolean;
        /** 是否闰年 */
        isLeap: boolean;
        /** 周几 */
        nWeek: number;
        /** 周几中文表示 */
        ncWeek: string;
        /** 是否节气 */
        isTerm: boolean;
        /** 节气名 */
        term: string | null | undefined;
        /** 星座 */
        astro: string;
    };
    /** 打点信息 */
    extraInfo: _UniCalendarSelectedElement;
    /** 当前完整日期 */
    fulldate: _UniCalendarDate;
}
type _UniCalendarOnChangeEvent = _UniCalendarBaseEvent;
/**
 * 日期改变时触发
 *
 * insert 为 true 时有效
 */
interface _UniCalendarOnChange {
    (event: _UniCalendarOnChangeEvent): void;
}
type _UniCalendarOnConfirmEvent = _UniCalendarBaseEvent;
/**
 * 确认选择时触发
 *
 * insert 为 false 时有效
 */
interface _UniCalendarOnConfirm {
    (event: _UniCalendarOnConfirmEvent): void;
}
interface _UniCalendarOnMonthSwitchEvent {
    /** 当前年 */
    year: number;
    /** 当前月 */
    month: number;
}
/** 切换月份时触发 */
interface _UniCalendarOnMonthSwitch {
    (event: _UniCalendarOnMonthSwitchEvent): void;
}
/** 关闭日历组件时触发 */
interface _UniCalendarOnClose {
    (): void;
}
/** 日历组件属性 */
type _UniCalendarProps = Partial<{
    /**
     * 自定义当前时间
     *
     * 格式为 YYYY-MM-DD
     *
     * 默认为 今天
     */
    date: _UniCalendarDate;
    /**
     * 是否显示农历
     *
     * 默认为 false
     */
    lunar: boolean;
    /**
     * 日期范围的开始日期
     *
     * 格式为 YYYY-MM-DD
     */
    startDate: _UniCalendarDate;
    /**
     * 日期范围的结束日期
     *
     * 格式为 YYYY-MM-DD
     */
    endDate: _UniCalendarDate;
    /**
     * 是否为范围选择
     *
     * 默认为 false
     */
    range: boolean;
    /**
     * 插入模式
     *
     * true 插入模式
     *
     * false 弹窗模式
     *
     * 默认为 true
     */
    insert: boolean;
    /**
     * 弹窗模式下是否清空上次选择内容
     *
     * insert 为 true 时有效
     *
     * 默认为 true
     */
    clearDate: boolean;
    /**
     * 是否显示月份为背景
     *
     * 默认为 true
     */
    showMonth: boolean;
    /** 打点 */
    selected: _UniCalendarSelected;
    /**
     * 弹出日历组件
     *
     * insert 为 true 时有效
     */
    open: _UniCalendarOpen;
    /**
     * 日期改变时触发
     *
     * insert 为 true 时有效
     */
    onChange: _UniCalendarOnChange;
    /**
     * 确认选择时触发
     *
     * insert 为 false 时有效
     */
    onConfirm: _UniCalendarOnConfirm;
    /** 切换月份时触发 */
    onMonthSwitch: _UniCalendarOnMonthSwitch;
    /** 关闭日历组件时触发 */
    onClose: _UniCalendarOnClose;
}>;
/**
 * 日历组件可以查看日期，选择任意范围内的日期，打点操作
 *
 * 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
 */
type _UniCalendar = Component<_UniCalendarProps>;
/** 日历组件实例 */
type _UniCalendarInstance = InstanceType<_UniCalendar>;

declare global {
    namespace UniHelper {
        /**
         * 日期
         *
         * 格式为 YYYY-MM-DD
         */
        type UniCalendarDate = _UniCalendarDate;
        /** 打点项 */
        interface UniCalendarSelectedElement extends _UniCalendarSelectedElement {
        }
        /** 打点 */
        interface UniCalendarSelected extends _UniCalendarSelected {
        }
        /**
         * 弹出日历组件
         *
         * insert 为 true 时有效
         */
        interface UniCalendarOpen extends _UniCalendarOpen {
        }
        interface UniCalendarBaseEvent extends _UniCalendarBaseEvent {
        }
        interface UniCalendarOnChangeEvent extends _UniCalendarOnChangeEvent {
        }
        /**
         * 日期改变时触发
         *
         * insert 为 true 时有效
         */
        interface UniCalendarOnChange extends _UniCalendarOnChange {
        }
        interface UniCalendarOnConfirmEvent extends _UniCalendarOnConfirmEvent {
        }
        /**
         * 确认选择时触发
         *
         * insert 为 false 时有效
         */
        interface UniCalendarOnConfirm extends _UniCalendarOnConfirm {
        }
        interface UniCalendarOnMonthSwitchEvent extends _UniCalendarOnMonthSwitchEvent {
        }
        /** 切换月份时触发 */
        interface UniCalendarOnMonthSwitch extends _UniCalendarOnMonthSwitch {
        }
        /** 关闭日历组件时触发 */
        interface UniCalendarOnClose extends _UniCalendarOnClose {
        }
        /** 日历组件属性 */
        type UniCalendarProps = _UniCalendarProps;
        /**
         * 日历组件可以查看日期，选择任意范围内的日期，打点操作
         *
         * 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
         */
        type UniCalendar = _UniCalendar;
        /** 日历组件实例 */
        type UniCalendarInstance = _UniCalendarInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /**
         * 日历组件可以查看日期，选择任意范围内的日期，打点操作
         *
         * 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
         */
        UniCalendar: _UniCalendar;
    }
}

type _UniCardOnClickType = 'cover' | 'title' | 'extra' | 'content' | 'actions';
/** 点击事件 */
interface _UniCardOnClick {
    (type: _UniCardOnClickType): void;
}
/** 卡片组件属性 */
type _UniCardProps = Partial<{
    /** 标题文字 */
    title: string;
    /** 副标题文字 */
    subTitle: string;
    /** 标题额外信息 */
    extra: string;
    /**
     * 标题左侧缩略图，支持网络图片和本地图片
     *
     * 本地图片需要传入绝对路径
     */
    thumbnail: string;
    /**
     * 封面图，支持网络图片和本地图片
     *
     * 本图片需要传入绝对路径
     */
    cover: string;
    /**
     * 卡片内容是否通栏
     *
     * true 去除 padding
     *
     * false 保留 padding
     *
     * 默认为 false
     */
    isFull: boolean;
    /**
     * 是否开启阴影
     *
     * 默认为 true
     */
    isShadow: boolean;
    /**
     * 卡片阴影
     *
     * 默认为 0px 0px 3px 1px rgba(0, 0, 0, 0.08)
     */
    shadow: string;
    /**
     * 是否显示卡片边框
     *
     * 默认为 true
     */
    border: boolean;
    /**
     * 卡片外边距
     *
     * 默认为 15px
     */
    margin: string;
    /**
     * 卡片内边距
     *
     * 默认为 0 10px
     */
    spacing: string;
    /**
     * 卡片内容内边距
     *
     * 默认为 10px
     */
    padding: string;
    /** 点击事件 */
    onClick: _UniCardOnClick;
}>;
/**
 * 卡片组件通用来显示完整独立的一段信息，同时让用户理解它的作用
 *
 * 例如一篇文章的预览图、作者信息、时间等
 *
 * 卡片通常是更复杂和更详细信息的入口点
 */
type _UniCard = Component<_UniCardProps>;
/** 卡片组件实例 */
type _UniCardInstance = InstanceType<_UniCard>;

declare global {
    namespace UniHelper {
        type UniCardOnClickType = _UniCardOnClickType;
        /** 点击事件 */
        interface UniCardOnClick extends _UniCardOnClick {
        }
        /** 卡片组件属性 */
        type UniCardProps = _UniCardProps;
        /**
         * 卡片组件通用来显示完整独立的一段信息，同时让用户理解它的作用
         *
         * 例如一篇文章的预览图、作者信息、时间等
         *
         * 卡片通常是更复杂和更详细信息的入口点
         */
        type UniCard = _UniCard;
        /** 卡片组件实例 */
        type UniCardInstance = _UniCardInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /**
         * 卡片组件通用来显示完整独立的一段信息，同时让用户理解它的作用
         *
         * 例如一篇文章的预览图、作者信息、时间等
         *
         * 卡片通常是更复杂和更详细信息的入口点
         */
        UniCard: _UniCard;
    }
}

/** 栅格规则 */
type _UniColRules = Partial<{
    /**
     * 栅格占据的列数
     *
     * 默认为 24
     */
    span: number;
    /** 栅格左侧间隔格数 */
    offset: number;
    /** 栅格向右偏移格数 */
    push: number;
    /** 栅格向左偏移格数 */
    pull: number;
}>;
/** 列属性 */
type _UniColProps = _UniColRules & Partial<{
    /** 屏幕宽度 <768px 时，要显示的栅格规则 */
    xs: number | _UniColRules;
    /** 屏幕宽度 ≥768px 时，要显示的栅格规则 */
    sm: number | _UniColRules;
    /** 屏幕宽度 ≥992px 时，要显示的栅格规则 */
    md: number | _UniColRules;
    /** 屏幕宽度 ≥1200px 时，要显示的栅格规则 */
    lg: number | _UniColRules;
    /** 屏幕宽度 ≥1920px 时，要显示的栅格规则 */
    xl: number | _UniColRules;
}>;
/** 流式栅格系统中的列 */
type _UniCol = Component<_UniColProps>;
/** 流式栅格系统中的列实例 */
type _UniColInstance = InstanceType<_UniCol>;

declare global {
    namespace UniHelper {
        /** 栅格规则 */
        type UniColRules = _UniColRules;
        /** 列属性 */
        type UniColProps = _UniColProps;
        /** 流式栅格系统中的列 */
        type UniCol = _UniCol;
        /** 流式栅格系统中的列实例 */
        type UniColInstance = _UniColInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 流式栅格系统中的列 */
        UniCol: _UniCol;
    }
}

/** 更新当前列表高度 */
interface _UniCollapseResize {
    (): void;
}
/** 折叠面板基本属性 */
type _UniCollapseBaseProps = Partial<{
    /** 更新当前列表高度 */
    resize: _UniCollapseResize;
}>;
/**
 * 折叠面板非手风琴模式展开面板的标识
 *
 * 不要和 uni-collapse-item open 一起使用
 */
type _UniCollapseNoAccordionValue = string[];
/** 折叠面板非手风琴模式切换面板时触发 */
interface _UniCollapseNoAccordionOnChange {
    (value: _UniCollapseNoAccordionValue): void;
}
/** 折叠面板非手风琴模式属性 */
type _UniCollapseNoAccordionProps = _UniCollapseBaseProps & {
    /**
     * 展开面板的标识
     *
     * 不要和 uni-collapse-item open 一起使用
     */
    value?: _UniCollapseNoAccordionValue;
    /** 关闭手风琴模式 */
    accordion?: false;
    /** 切换面板时触发 */
    onChange?: _UniCollapseNoAccordionOnChange;
};
/**
 * 折叠面板手风琴模式展开面板的标识
 *
 * 不要和 uni-collapse-item open 一起使用
 */
type _UniCollapseAccordionValue = string;
/** 折叠面板手风琴模式切换面板时触发 */
interface _UniCollapseAccordionOnChange {
    (value: _UniCollapseAccordionValue): void;
}
/** 折叠面板手风琴模式属性 */
type _UniCollapseAccordionProps = _UniCollapseBaseProps & {
    /**
     * 展开面板的标识
     *
     * 不要和 uni-collapse-item open 一起使用
     */
    value?: _UniCollapseAccordionValue;
    /** 关闭手风琴模式 */
    accordion: true;
    /** 切换面板时触发 */
    onChange?: _UniCollapseAccordionOnChange;
};
/** 折叠面板属性 */
type _UniCollapseProps = _UniCollapseNoAccordionProps | _UniCollapseAccordionProps;
/**
 * 折叠面板用来折叠/显示过长的内容或者是列表
 *
 * 通常是在多内容分类项使用，折叠不重要的内容，显示重要内容
 *
 * 点击可以展开折叠部分
 */
type _UniCollapse = Component<_UniCollapseProps>;
/** 折叠面板实例 */
type _UniCollapseInstance = InstanceType<_UniCollapse>;

declare global {
    namespace UniHelper {
        /** 更新当前列表高度 */
        interface UniCollapseResize extends _UniCollapseResize {
        }
        /** 折叠面板基本属性 */
        type UniCollapseBaseProps = _UniCollapseBaseProps;
        /**
         * 折叠面板非手风琴模式展开面板的标识
         *
         * 不要和 uni-collapse-item open 一起使用
         */
        type UniCollapseNoAccordionValue = _UniCollapseNoAccordionValue;
        /** 折叠面板非手风琴模式切换面板时触发 */
        interface UniCollapseNoAccordionOnChange extends _UniCollapseNoAccordionOnChange {
        }
        /** 折叠面板非手风琴模式属性 */
        type UniCollapseNoAccordionProps = _UniCollapseNoAccordionProps;
        /**
         * 折叠面板手风琴模式展开面板的标识
         *
         * 不要和 uni-collapse-item open 一起使用
         */
        type UniCollapseAccordionValue = _UniCollapseAccordionValue;
        /** 折叠面板手风琴模式切换面板时触发 */
        interface UniCollapseAccordionOnChange extends _UniCollapseAccordionOnChange {
        }
        /** 折叠面板手风琴模式属性 */
        type UniCollapseAccordionProps = _UniCollapseAccordionProps;
        /** 折叠面板属性 */
        type UniCollapseProps = _UniCollapseProps;
        /**
         * 折叠面板用来折叠/显示过长的内容或者是列表
         *
         * 通常是在多内容分类项使用，折叠不重要的内容，显示重要内容
         *
         * 点击可以展开折叠部分
         */
        type UniCollapse = _UniCollapse;
        /** 折叠面板实例 */
        type UniCollapseInstance = _UniCollapseInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /**
         * 折叠面板用来折叠/显示过长的内容或者是列表
         *
         * 通常是在多内容分类项使用，折叠不重要的内容，显示重要内容
         *
         * 点击可以展开折叠部分
         */
        UniCollapse: _UniCollapse;
    }
}

/**
 * 折叠面板标题分隔线
 *
 * auto 分隔线自动显示
 *
 * none 不显示分隔线
 *
 * show 一直显示分隔线
 */
type _UniCollapseItemTitleBorder = 'auto' | 'none' | 'show';
type _UniCollapseItemProps = Partial<{
    /** 标题文字 */
    title: string;
    /** 标题左侧缩略图 */
    thumb: string;
    /**
     * 是否禁用
     *
     * 默认为 false
     */
    disabled: boolean;
    /**
     * 是否展开面板
     *
     * 不要和 uni-collapse value / v-model 一起使用
     *
     * 默认为 false
     */
    open: boolean;
    /**
     * 是否开启动画
     *
     * 默认为 false
     */
    showAnimation: boolean;
    /**
     * 是否显示分隔线
     *
     * 默认为 true
     */
    border: boolean;
    /**
     * 折叠面板标题分隔线
     *
     * auto 分隔线自动显示
     *
     * none 不显示分隔线
     *
     * show 一直显示分隔线
     *
     * 默认为 auto
     */
    titleBorder: _UniCollapseItemTitleBorder;
    /**
     * 是否显示右侧箭头
     *
     * 默认为 true
     */
    showArrow: boolean;
}>;
type _UniCollapseItem = Component<_UniCollapseItemProps>;
type _UniCollapseItemInstance = InstanceType<_UniCollapseItem>;

declare global {
    namespace UniHelper {
        /**
         * 折叠面板标题分隔线
         *
         * auto 分隔线自动显示
         *
         * none 不显示分隔线
         *
         * show 一直显示分隔线
         */
        type UniCollapseItemTitleBorder = _UniCollapseItemTitleBorder;
        type UniCollapseItemProps = _UniCollapseItemProps;
        type UniCollapseItem = _UniCollapseItem;
        type UniCollapseItemInstance = _UniCollapseItemInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniCollapseItem: _UniCollapseItem;
    }
}

/** 组合框值 */
type _UniComboxValue = string;
/** 输入时触发 */
interface _UniComboxOnInput {
    (value: _UniComboxValue): void;
}
/** 组合框属性 */
type _UniComboxProps = Partial<{
    /**
     * 是否显示边框
     *
     * 默认为 true
     */
    border: boolean;
    /** 标签文字 */
    label: string;
    /** 组合框值 */
    value: _UniComboxValue;
    /**
     * 标签宽度
     *
     * 默认为 auto
     */
    labelWidth: string;
    /** 输入框占位符 */
    placeholder: string;
    /**
     * 候选字段
     *
     * 默认为 []
     */
    candidates: string | string[];
    /**
     * 无匹配项时的提示语
     *
     * 默认为 无匹配项
     */
    emptyTips: string;
    /** 输入时触发 */
    onInput: _UniComboxOnInput;
}>;
/** 组合框组件，一般用于可以选择也可以输入的表单项 */
type _UniCombox = Component<_UniComboxProps>;
/** 组合框组件实例 */
type _UniComboxInstance = InstanceType<_UniCombox>;

declare global {
    namespace UniHelper {
        /** 组合框值 */
        type UniComboxValue = _UniComboxValue;
        /** 输入时触发 */
        interface UniComboxOnInput extends _UniComboxOnInput {
        }
        /** 组合框属性 */
        type UniComboxProps = _UniComboxProps;
        /** 组合框组件，一般用于可以选择也可以输入的表单项 */
        type UniCombox = _UniCombox;
        /** 组合框组件实例 */
        type UniComboxInstance = _UniComboxInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 组合框组件，一般用于可以选择也可以输入的表单项 */
        UniCombox: _UniCombox;
    }
}

/** 动态更新时间后，刷新组件显示 */
interface _UniCountdownOnUpdate {
    (): void;
}
/** 倒计时时间到触发事件 */
interface _UniCountdownOnTimeup {
    (): void;
}
/** 倒计时属性 */
type _UniCountdownProps = Partial<{
    /**
     * 背景色
     *
     * 默认为 #ffffff
     */
    backgroundColor: string;
    /**
     * 文字颜色
     *
     * 默认为 #000000
     */
    color: string;
    /**
     * 分隔符颜色
     *
     * 默认为 #333
     */
    splitorColor: string;
    /**
     * 天数
     *
     * 默认为 0
     */
    day: number;
    /**
     * 小时数
     *
     * 默认为 0
     */
    hour: number;
    /**
     * 分钟数
     *
     * 默认为 0
     */
    minute: number;
    /**
     * 秒数
     *
     * 默认为 0
     */
    second: number;
    /**
     * 目标时间戳
     *
     * 默认为 0
     */
    timestamp: number;
    /**
     * 是否显示天数
     *
     * 默认为 true
     */
    showDay: boolean;
    /**
     * 是否以冒号为分隔符
     *
     * 默认为 true
     */
    showColon: boolean;
    /**
     * 是否初始化组件后就开始倒计时
     *
     * 默认为 true
     */
    start: boolean;
    /** 动态更新时间后，刷新组件显示 */
    update: _UniCountdownOnUpdate;
    /** 倒计时时间到触发事件 */
    onTimeup: _UniCountdownOnTimeup;
}>;
/** 倒计时 */
type _UniCountdown = Component<_UniCountdownProps>;
/** 倒计时实例 */
type _UniCountdownInstance = InstanceType<_UniCountdown>;

declare global {
    namespace UniHelper {
        /** 动态更新时间后，刷新组件显示 */
        interface UniCountdownOnUpdate extends _UniCountdownOnUpdate {
        }
        /** 倒计时时间到触发事件 */
        interface UniCountdownOnTimeup extends _UniCountdownOnTimeup {
        }
        /** 倒计时属性 */
        type UniCountdownProps = _UniCountdownProps;
        /** 倒计时 */
        type UniCountdown = _UniCountdown;
        /** 倒计时实例 */
        type UniCountdownInstance = _UniCountdownInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 倒计时 */
        UniCountdown: _UniCountdown;
    }
}

/** 默认值 */
type _UniDataCheckboxValue = string | number;
/**
 * 显示模式
 *
 * default 横向显示
 *
 * list 列表
 *
 * button 按钮
 *
 * tag 标签
 */
type _UniDataCheckboxMode = 'default' | 'list' | 'button' | 'tag';
interface _UniDataCheckboxLocaldataItem {
    /** 显示文本 */
    text: string;
    /** 选中后的值 */
    value: _UniDataCheckboxValue;
    /**
     * 是否禁用
     *
     * 默认为 false
     */
    disable?: boolean;
}
/** 本地渲染数据 */
type _UniDataCheckboxLocaldata = _UniDataCheckboxLocaldataItem[];
/** list 模式下 icon 显示的位置 */
type _UniDataCheckboxIcon = 'left' | 'right';
/**
 * 字段映射
 *
 * 将 text/value 映射到数据中的其他字段
 */
interface _UniDataCheckboxMap {
    text: string;
    value: string;
}
type _UniDataCheckboxBaseProps = Partial<{
    /** 本地渲染数据 */
    localdata: _UniDataCheckboxLocaldata;
    /**
     * 显示模式
     *
     * default 横向显示
     *
     * list 列表
     *
     * button 按钮
     *
     * tag 标签
     *
     * 默认为 default
     */
    mode: _UniDataCheckboxMode;
    /**
     * 是否换行显示
     *
     * 默认为 false
     */
    wrap: boolean;
    /**
     * list 模式下 icon 显示的位置
     *
     * 默认为 left
     */
    icon: _UniDataCheckboxIcon;
    /**
     * 选中颜色
     *
     * 默认为 #2979ff
     */
    selectedColor: string;
    /**
     * 选中文本颜色
     *
     * 默认为 #666
     */
    selectedTextColor: string;
    /**
     * 没有数据时显示的文字，本地数据无效
     *
     * 默认为 暂无数据
     */
    emptyText: string;
    /**
     * 字段映射
     *
     * 将 text/value 映射到数据中的其他字段
     *
     * 默认为 { text: 'text', value: 'value' }
     */
    map: _UniDataCheckboxMap;
}>;
interface _UniDataCheckboxSingleOnChangeDetail {
    value: _UniDataCheckboxValue;
    data: _UniDataCheckboxLocaldata;
}
interface _UniDataCheckboxSingleOnChangeEvent {
    detail: _UniDataCheckboxSingleOnChangeDetail;
}
/** 选中状态改变时触发 */
interface _UniDataCheckboxSingleOnChange {
    (event: _UniDataCheckboxSingleOnChangeEvent): void;
}
type _UniDataCheckboxSingleProps = Partial<{
    /** 默认值 */
    value: _UniDataCheckboxValue;
    /**
     * 关闭多选
     *
     * 默认为 false
     */
    multiple?: false;
    /** 选中状态改变时触发 */
    onChange: _UniDataCheckboxSingleOnChange;
}>;
interface _UniDataCheckboxMultipleOnChangeDetail {
    value: _UniDataCheckboxValue[];
    data: _UniDataCheckboxLocaldata;
}
interface _UniDataCheckboxMultipleOnChangeEvent {
    detail: _UniDataCheckboxMultipleOnChangeDetail;
}
/** 选中状态改变时触发 */
interface _UniDataCheckboxMultipleOnChange {
    (event: _UniDataCheckboxMultipleOnChangeEvent): void;
}
type _UniDataCheckboxMultipleProps = Partial<{
    /** 默认值 */
    value: _UniDataCheckboxValue[];
    /**
     * 开启多选
     *
     * 默认为 false
     */
    multiple: true;
    /**
     * 最小选择个数
     *
     * multiple 为 true 时有效
     */
    min: string | number;
    /**
     * 最大选择个数
     *
     * multiple 为 true 时有效
     */
    max: string | number;
    /** 选中状态改变时触发 */
    onChange: _UniDataCheckboxMultipleOnChange;
}>;
type _UniDataCheckboxProps = _UniDataCheckboxSingleProps | _UniDataCheckboxMultipleProps;
/**
 * 本组件是基于 uni-app 基础组件 checkbox 的封装。本组件要解决问题包括：
 *
 * 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容，在以往，开发者需要编写不少代码实现类似功能
 *
 * 自动的表单校验：组件绑定了 data，且符合 uni-forms 组件的表单校验规范，搭配使用会自动实现表单校验
 *
 * 本组件合并了单选多选
 *
 * 本组件有若干风格选择，如普通的单选多选框、并列 button 风格、tag 风格，开发者可以快速选择需要的风格，会牺牲一定的样式自定义性
 *
 * 在 uni-cloud 开发中，DB Schema 中配置了 enum 枚举等类型后，在 web 控制台的自动生成表单功能中，会自动生成 uni-data-checkbox 组件并绑定好
 * data
 */
type _UniDataCheckbox = Component<_UniDataCheckboxProps>;
type _UniDataCheckboxInstance = InstanceType<_UniDataCheckbox>;

declare global {
    namespace UniHelper {
        /** 默认值 */
        type UniDataCheckboxValue = _UniDataCheckboxValue;
        /**
         * 显示模式
         *
         * default 横向显示
         *
         * list 列表
         *
         * button 按钮
         *
         * tag 标签
         */
        type UniDataCheckboxMode = _UniDataCheckboxMode;
        interface UniDataCheckboxLocaldataItem extends _UniDataCheckboxLocaldataItem {
        }
        /** 本地渲染数据 */
        type UniDataCheckboxLocaldata = _UniDataCheckboxLocaldata;
        /** list 模式下 icon 显示的位置 */
        type UniDataCheckboxIcon = _UniDataCheckboxIcon;
        /**
         * 字段映射
         *
         * 将 text/value 映射到数据中的其他字段
         */
        interface UniDataCheckboxMap extends _UniDataCheckboxMap {
        }
        type UniDataCheckboxBaseProps = _UniDataCheckboxBaseProps;
        interface UniDataCheckboxSingleOnChangeDetail extends _UniDataCheckboxSingleOnChangeDetail {
        }
        type UniDataCheckboxSingleOnChangeEvent = _UniDataCheckboxSingleOnChangeEvent;
        /** 选中状态改变时触发 */
        interface UniDataCheckboxSingleOnChange extends _UniDataCheckboxSingleOnChange {
        }
        type UniDataCheckboxSingleProps = _UniDataCheckboxSingleProps;
        interface UniDataCheckboxMultipleOnChangeDetail extends _UniDataCheckboxMultipleOnChangeDetail {
        }
        type UniDataCheckboxMultipleOnChangeEvent = _UniDataCheckboxMultipleOnChangeEvent;
        /** 选中状态改变时触发 */
        interface UniDataCheckboxMultipleOnChange extends _UniDataCheckboxMultipleOnChange {
        }
        type UniDataCheckboxMultipleProps = _UniDataCheckboxMultipleProps;
        type UniDataCheckboxProps = _UniDataCheckboxProps;
        /**
         * 本组件是基于 uni-app 基础组件 checkbox 的封装。本组件要解决问题包括：
         *
         * 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容，在以往，开发者需要编写不少代码实现类似功能
         *
         * 自动的表单校验：组件绑定了 data，且符合 uni-forms 组件的表单校验规范，搭配使用会自动实现表单校验
         *
         * 本组件合并了单选多选
         *
         * 本组件有若干风格选择，如普通的单选多选框、并列 button 风格、tag 风格，开发者可以快速选择需要的风格，会牺牲一定的样式自定义性
         *
         * 在 uni-cloud 开发中，DB Schema 中配置了 enum 枚举等类型后，在 web 控制台的自动生成表单功能中，会自动生成 uni-data-checkbox 组件并绑定好
         * data
         */
        type UniDataCheckbox = _UniDataCheckbox;
        type UniDataCheckboxInstance = _UniDataCheckboxInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /**
         * 本组件是基于 uni-app 基础组件 checkbox 的封装。本组件要解决问题包括：
         *
         * 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容，在以往，开发者需要编写不少代码实现类似功能
         *
         * 自动的表单校验：组件绑定了 data，且符合 uni-forms 组件的表单校验规范，搭配使用会自动实现表单校验
         *
         * 本组件合并了单选多选
         *
         * 本组件有若干风格选择，如普通的单选多选框、并列 button 风格、tag 风格，开发者可以快速选择需要的风格，会牺牲一定的样式自定义性
         *
         * 在 uni-cloud 开发中，DB Schema 中配置了 enum 枚举等类型后，在 web 控制台的自动生成表单功能中，会自动生成 uni-data-checkbox 组件并绑定好
         * data
         */
        UniDataCheckbox: _UniDataCheckbox;
    }
}

/**
 * 服务商
 *
 * aliyun 阿里云
 *
 * tencent 腾讯云
 */
type _UniDataPickerSpaceInfoProvider = 'aliyun' | 'tencent';
/** 服务空间信息 */
interface _UniDataPickerSpaceInfo {
    /**
     * 服务商
     *
     * aliyun 阿里云
     *
     * tencent 腾讯云
     */
    provider: _UniDataPickerSpaceInfoProvider;
    /** 服务空间 ID */
    spaceId: string;
    /** 阿里云支持，在控制台服务空间列表中查看 */
    clientSecret?: string;
    /** 服务空间地址，阿里云支持 */
    endpoint?: string;
}
type _UniDataPickerValue = string | number | boolean | null;
type _UniDataPickerKey = _UniDataPickerValue;
interface _UniDataPickerLocaldataItem {
    /**
     * 节点唯一标识
     *
     * 如果不传，则以 value 为准
     */
    key?: _UniDataPickerKey;
    /** 值 */
    value: _UniDataPickerValue;
    /** 显示文字 */
    text: string;
    /**
     * 是否默认选中
     *
     * 默认为 false
     */
    selected?: boolean;
    /**
     * 是否禁用
     *
     * 默认为 false
     */
    disable?: boolean;
    /** 数组分组标识 */
    group?: string;
    /**
     * 是否为叶子节点
     *
     * true 忽略 children
     *
     * 默认为 false
     */
    isleaf?: boolean;
    /** 子节点 */
    children?: _UniDataPickerLocaldataItem[];
    /** 自由扩展 key */
    [key: string]: any;
}
/** 本地数据 */
type _UniDataPickerLocaldata = _UniDataPickerLocaldataItem[];
/**
 * 分页策略
 *
 * add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
 *
 * replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
 */
type _UniDataPickerPageData = 'add' | 'replace';
/**
 * 字段映射
 *
 * 将 text/value 映射到数据中的其他字段
 */
interface _UniDataPickerMap {
    text: string;
    value: string;
}
/** 打开弹出层 */
interface _UniDataPickerShow {
    (): void;
}
/** 关闭弹出层 */
interface _UniDataPickerHide {
    (): void;
}
/** 清除已选项 */
interface _UniDataPickerClear {
    (): void;
}
interface _UniDataPickerOnChangeDetail {
    value: any[];
}
interface _UniDataPickerOnChangeEvent {
    detail: _UniDataPickerOnChangeDetail;
}
/** 选择完成时触发 */
interface _UniDataPickerOnChange {
    (event: _UniDataPickerOnChangeEvent): void;
}
/** 节点被点击时触发 */
interface _UniDataPickerOnNodeclick {
    (node: any): void;
}
/** TODO 动态加载节点数据前触发 */
interface _UniDataPickerOnStepsearch {
    (event: BaseEvent): void;
}
/** 弹出层弹出时触发 */
interface _UniDataPickerOnPopupopened {
    (): void;
}
/** 弹出层关闭时触发 */
interface _UniDataPickerOnPopupclosed {
    (): void;
}
type _UniDataPickerProps = Partial<{
    /** 绑定数据 */
    value: _UniDataPickerValue;
    /** 服务空间信息 */
    spaceInfo: _UniDataPickerSpaceInfo;
    /** 本地数据 */
    localdata: _UniDataPickerLocaldata;
    /**
     * 是否预加载数据
     *
     * 默认为 false
     */
    preload: boolean;
    /**
     * 是否禁用
     *
     * 默认为 false
     */
    readonly: boolean;
    /**
     * 是否显示清除按钮
     *
     * 默认为 true
     */
    clearIcon: boolean;
    /**
     * 是否隐藏 tab 标签过长的文本
     *
     * 默认为 true
     */
    ellipsis: boolean;
    /**
     * 分步查询时，是否点击节点请求数据
     *
     * 默认为 true
     */
    stepSearh: boolean;
    /** 分步查询时，动态加载云端数据的 URL */
    stepSearchUrl: string;
    /** 分步查询时当前字段名称 */
    selfField: string;
    /** 分步查询时父字段名称 */
    parentField: string;
    /** 表名，多个表名用 , 分割 */
    collection: string;
    /**
     * 云端执行数据库查询的前或后，触发某个 action 函数操作，进行预处理或后处理
     *
     * 场景：前端无权操作的数据，比如阅读数 +1
     */
    action: string;
    /** 查询字段，多个字段用 , 分割 */
    field: string;
    /** 查询条件 */
    where: string;
    /** 排序字段及正序倒叙设置 */
    orderby: string;
    /**
     * 分页策略
     *
     * add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
     *
     * replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
     *
     * 默认为 add
     */
    pageData: _UniDataPickerPageData;
    /**
     * 当前页
     *
     * 默认为 1
     */
    pageCurrent: number;
    /**
     * 每页数据数量
     *
     * 默认为 500
     */
    pageSize: number;
    /**
     * 是否查询总数据条数
     *
     * 默认 false
     */
    getcount: boolean;
    /**
     * 指定查询结果是否仅返回数组第一条数据
     *
     * false 结果数据外会再用数组包裹一层，一般用于列表页
     *
     * true 直接返回结果数据，一般用于非列表页
     *
     * 默认 false
     */
    getone: boolean;
    /**
     * 是否查询树状结构数据
     *
     * 默认为 false
     */
    gettree: boolean;
    /**
     * 是否手动触发
     *
     * 默认为 false
     */
    manual: boolean;
    /**
     * 是否多个
     *
     * 默认为 false
     */
    multiple: boolean;
    /**
     * 弹出层标题
     *
     * 默认为 请选择
     */
    popupTitle: string;
    /**
     * 占位文本
     *
     * 默认为 请选择
     */
    placeholder: string;
    /**
     * 是否显示边框
     *
     * 默认为 true
     */
    border: boolean;
    /**
     * 分隔符
     *
     * 默认为 /
     */
    split: string;
    /**
     * 字段映射
     *
     * 将 text/value 映射到数据中的其他字段
     *
     * 默认为 [{ text: 'text', value: 'value' }]
     */
    map: _UniDataPickerMap;
    /** 打开弹出层 */
    show: _UniDataPickerShow;
    /** 关闭弹出层 */
    hide: _UniDataPickerHide;
    /** 清除已选项 */
    clear: _UniDataPickerClear;
    /** 选择完成时触发 */
    onChange: _UniDataPickerOnChange;
    /** 节点被点击时触发 */
    onNodeclick: _UniDataPickerOnNodeclick;
    /** 动态加载节点数据前触发 */
    onStepsearch: _UniDataPickerOnStepsearch;
    /** 弹出层弹出时触发 */
    onPopupopened: _UniDataPickerOnPopupopened;
    /** 弹出层关闭时触发 */
    onPopupclosed: _UniDataPickerOnPopupclosed;
}>;
/**
 * 选择类 datacom 组件
 *
 * 支持单列、和多列级联选择，列数没有限制，如果屏幕显示不全，顶部 tab 区域会左右滚动
 *
 * 候选数据支持一次性加载完毕，也支持懒加载
 *
 * uni-data-picker 尤其适用于地址选择、分类选择等选择类
 *
 * uni-data-picker 支持本地数据、云端静态数据 json 和 uni-cloud 云数据库数据
 *
 * uni-data-picker 可以通过 JQL 直连 uni-cloud 云数据库，配套 DB Schema，可在 schema2code 中自动生成前端页面，还支持服务器端校验
 */
type _UniDataPicker = Component<_UniDataPickerProps>;
/** 选择类 datacom 组件实例 */
type _UniDataPickerInstance = InstanceType<_UniDataPicker>;

declare global {
    namespace UniHelper {
        /**
         * 服务商
         *
         * aliyun 阿里云
         *
         * tencent 腾讯云
         */
        type UniDataPickerSpaceInfoProvider = _UniDataPickerSpaceInfoProvider;
        /** 服务空间信息 */
        interface UniDataPickerSpaceInfo extends _UniDataPickerSpaceInfo {
        }
        type UniDataPickerValue = _UniDataPickerValue;
        type UniDataPickerKey = _UniDataPickerKey;
        interface UniDataPickerLocaldataItem extends _UniDataPickerLocaldataItem {
        }
        /** 本地数据 */
        type UniDataPickerLocaldata = _UniDataPickerLocaldata;
        /**
         * 分页策略
         *
         * add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
         *
         * replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
         */
        type UniDataPickerPageData = _UniDataPickerPageData;
        /**
         * 字段映射
         *
         * 将 text/value 映射到数据中的其他字段
         */
        interface UniDataPickerMap extends _UniDataPickerMap {
        }
        /** 打开弹出层 */
        interface UniDataPickerShow extends _UniDataPickerShow {
        }
        /** 关闭弹出层 */
        interface UniDataPickerHide extends _UniDataPickerHide {
        }
        /** 清除已选项 */
        interface UniDataPickerClear extends _UniDataPickerClear {
        }
        interface UniDataPickerOnChangeDetail extends _UniDataPickerOnChangeDetail {
        }
        /** 选择完成时触发 */
        interface UniDataPickerOnChange extends _UniDataPickerOnChange {
        }
        /** 节点被点击时触发 */
        interface UniDataPickerOnNodeclick extends _UniDataPickerOnNodeclick {
        }
        /** 动态加载节点数据前触发 */
        interface UniDataPickerOnStepsearch extends _UniDataPickerOnStepsearch {
        }
        /** 弹出层弹出时触发 */
        interface UniDataPickerOnPopupopened extends _UniDataPickerOnPopupopened {
        }
        /** 弹出层关闭时触发 */
        interface UniDataPickerOnPopupclosed extends _UniDataPickerOnPopupclosed {
        }
        type UniDataPickerProps = _UniDataPickerProps;
        /**
         * 选择类 datacom 组件
         *
         * 支持单列、和多列级联选择，列数没有限制，如果屏幕显示不全，顶部 tab 区域会左右滚动
         *
         * 候选数据支持一次性加载完毕，也支持懒加载
         *
         * uni-data-picker 尤其适用于地址选择、分类选择等选择类
         *
         * uni-data-picker 支持本地数据、云端静态数据 json 和 uni-cloud 云数据库数据
         *
         * uni-data-picker 可以通过 JQL 直连 uni-cloud 云数据库，配套 DB Schema，可在 schema2code 中自动生成前端页面，还支持服务器端校验
         */
        type UniDataPicker = _UniDataPicker;
        /** 选择类 datacom 组件实例 */
        type UniDataPickerInstance = _UniDataPickerInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /**
         * 选择类 datacom 组件
         *
         * 支持单列、和多列级联选择，列数没有限制，如果屏幕显示不全，顶部 tab 区域会左右滚动
         *
         * 候选数据支持一次性加载完毕，也支持懒加载
         *
         * uni-data-picker 尤其适用于地址选择、分类选择等选择类
         *
         * uni-data-picker 支持本地数据、云端静态数据 json 和 uni-cloud 云数据库数据
         *
         * uni-data-picker 可以通过 JQL 直连 uni-cloud 云数据库，配套 DB Schema，可在 schema2code 中自动生成前端页面，还支持服务器端校验
         */
        UniDataPicker: _UniDataPicker;
    }
}

type _UniDataSelectValue = string | number;
interface _UniDataSelectLocaldataItem {
    /** 值 */
    value: _UniDataSelectValue;
    /** 显示文字 */
    text: string;
    /**
     * 是否禁用
     *
     * 默认为 false
     */
    disable?: boolean;
}
/** 本地数据 */
type _UniDataSelectLocaldata = _UniDataSelectLocaldataItem[];
/** 改变时触发 */
interface _UniDataSelectOnChange {
    (value: _UniDataSelectValue): void;
}
type _UniDataSelectProps = Partial<{
    /** 已选择数据的 value 值 */
    value: _UniDataSelectValue;
    /** 本地数据 */
    localdata: _UniDataSelectLocaldata;
    /**
     * 是否可以清空已选项
     *
     * 默认为 true
     */
    clear: boolean;
    /** 左侧标题 */
    label: string;
    /**
     * 输入框的提示文字
     *
     * 默认为 请选择
     */
    placeholder: string;
    /**
     * 没有数据时显示的文字，本地数据无效
     *
     * 默认为 无选项
     */
    emptyTips: string;
    /**
     * 没有数据时显示的文字，本地数据无效
     *
     * 默认为 暂无数据
     */
    emptyText: string;
    /**
     * 是否禁用
     *
     * 默认为 false
     */
    disabled: boolean;
    /** 格式化输出 */
    format: string;
    /** 改变时触发 */
    onChange: _UniDataSelectOnChange;
}>;
/**
 * 当选项过多时，使用下拉菜单展示并选择内容
 *
 * 本组件要解决问题包括
 *
 * 数据绑定型组件：给本组件绑定一个 data，会自动渲染一组候选内容
 *
 * 自动的表单校验：组件绑定了 data，且符合 uni-forms 的表单校验规范，搭配使用会自动实现表单校验
 */
type _UniDataSelect = Component<_UniDataSelectProps>;
type _UniDataSelectInstance = InstanceType<_UniDataSelect>;

declare global {
    namespace UniHelper {
        type UniDataSelectValue = _UniDataSelectValue;
        interface UniDataSelectLocaldataItem extends _UniDataSelectLocaldataItem {
        }
        /** 本地数据 */
        type UniDataSelectLocaldata = _UniDataSelectLocaldata;
        /** 改变时触发 */
        interface UniDataSelectOnChange extends _UniDataSelectOnChange {
        }
        type UniDataSelectProps = _UniDataSelectProps;
        type UniDataSelect = _UniDataSelect;
        type UniDataSelectInstance = _UniDataSelectInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniDataSelect: _UniDataSelect;
    }
}

/**
 * 格式化使用的语言
 *
 * zh 中文
 *
 * en 英文
 */
type _UniDateformatLocale = 'zh' | 'en';
/** 要格式化的日期对象/日期字符串/时间戳 */
type _UniDateformatData = Date | string | number;
/** 日期格式化组件属性 */
type _UniDateformatProps = Partial<{
    /**
     * 要格式化的日期对象/日期字符串/时间戳
     *
     * 默认为 -
     */
    date: _UniDateformatData;
    /**
     * 转化类型阈值
     *
     * 默认为 [0, 0]
     */
    threshold: [number, number];
    /**
     * 格式字符串
     *
     * yyyy 四位年份
     *
     * yy 两位年份
     *
     * MM 两位月份，不足则在前面补 0
     *
     * M 月份，不自动补 0
     *
     * dd 两位天，不足则在前面补 0
     *
     * d 天，不自动补 0
     *
     * hh 两位小时，不足则在前面补 0
     *
     * h 小时，不自动补 0
     *
     * mm 两位分钟，不足则在前面补 0
     *
     * m 分钟，不自动补 0
     *
     * ss 两位秒，不足则在前面补 0
     *
     * s 秒，不自动补 0
     *
     * SSS 三位毫秒，不足则在前面补 0
     *
     * S 毫秒，不自动补 0
     *
     * 默认为 yyyy/MM/dd hh:mm:ss
     */
    format: string;
    /**
     * 格式化使用的语言
     *
     * zh 中文
     *
     * en 英文
     *
     * 默认为 zh
     */
    locale: _UniDateformatLocale;
    /**
     * 刷新频率
     *
     * 单位为 ms
     *
     * 默认为 0，表示不刷新
     */
    refreshRate: number | string;
}>;
/** 日期格式化组件 */
type _UniDateformat = Component<_UniDateformatProps>;
/** 日期格式化组件实例 */
type _UniDateformatInstance = InstanceType<_UniDateformat>;

declare global {
    namespace UniHelper {
        /** 格式化使用的语言 */
        type UniDateformatLocale = _UniDateformatLocale;
        /** 要格式化的日期对象/日期字符串/时间戳 */
        type UniDateformatData = _UniDateformatData;
        /** 日期格式化组件属性 */
        type UniDateformatProps = _UniDateformatProps;
        /** 日期格式化组件 */
        type UniDateformat = _UniDateformat;
        /** 日期格式化组件实例 */
        type UniDateformatInstance = _UniDateformatInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 日期格式化组件 */
        UniDateformat: _UniDateformat;
    }
}

/**
 * 选择器类型
 *
 * date 日期
 *
 * daterange 日期范围
 *
 * datetime 日期时间
 *
 * datetimerange 日期时间范围
 */
type _UniDatetimePickerType = 'date' | 'daterange' | 'datetime' | 'datetimerange';
/** 值类型 */
type _UniDatetimePickerValue = string | number | Date | string[] | number[] | Date[];
/**
 * 最小值
 *
 * string 日期字符串
 *
 * number 时间戳
 */
type _UniDatetimePickerStart = string | number;
/**
 * 最大值
 *
 * string 日期字符串
 *
 * number 时间戳
 */
type _UniDatetimePickerEnd = string | number;
/** 返回值类型 */
type _UniDatetimePickerReturnType = 'timestamp' | 'string' | 'date';
/** 打开弹出层 */
interface _UniDatetimePickerShow {
    (): void;
}
/** 关闭弹出层 */
interface _UniDatetimePickerClose {
    (): void;
}
/** 清除上次选中的状态和值 */
interface _UniDatetimePickerClear {
    (): void;
}
/** 确定日期时间时触发的事件 */
interface _UniDatetimePickerOnChange {
    (value: _UniDatetimePickerValue): void;
}
/** 点击遮罩层触发 */
interface _UniDatetimePickerOnMaskClick {
    (value: _UniDatetimePickerValue): void;
}
type _UniDatetimePickerProps = Partial<{
    /**
     * 选择器类型
     *
     * date 日期
     *
     * daterange 日期范围
     *
     * datetime 日期时间
     *
     * datetimerange 日期时间范围
     *
     * 默认为 datetime
     */
    type: _UniDatetimePickerType;
    /** 输入框当前值 */
    value: _UniDatetimePickerValue;
    /** 最小值 */
    start: _UniDatetimePickerStart;
    /** 最大值 */
    end: _UniDatetimePickerEnd;
    /**
     * 返回值格式
     *
     * 默认为 string
     */
    returnType: _UniDatetimePickerReturnType;
    /**
     * 是否显示边框
     *
     * 默认为 true
     */
    border: boolean;
    /**
     * 选择范围时的分隔符
     *
     * 默认为 -
     */
    rangeSeparator: string;
    /** 非范围选择时的占位内容 */
    placeholder: string;
    /** 范围选择时开始日期的占位内容 */
    startPlaceholder: string;
    /** 范围选择时结束日期的占位内容 */
    endPlaceholder: string;
    /**
     * 是否不可选择
     *
     * 默认为 false
     */
    disabled: boolean;
    /**
     * 是否显示清除按钮
     *
     * 默认为 true
     */
    clearIcon: boolean;
    /**
     * 是否不显示秒，只显示时分
     *
     * 默认为 false
     */
    hideSecond: boolean;
    /** 打开弹出层 */
    show: _UniDatetimePickerShow;
    /** 关闭弹出层 */
    close: _UniDatetimePickerClose;
    /** 清除上次选中的状态和值 */
    clear: _UniDatetimePickerClear;
    /** 确定日期时间时触发的事件 */
    onChange: _UniDatetimePickerOnChange;
    /** 点击遮罩层触发 */
    onMaskClick: _UniDatetimePickerOnMaskClick;
}>;
/** 支持时间戳输入和输出（起始时间、终止时间也支持时间戳），可同时选择日期和时间 */
type _UniDatetimePicker = Component<_UniDatetimePickerProps>;
type _UniDatetimePickerInstance = InstanceType<_UniDatetimePicker>;

declare global {
    namespace UniHelper {
        /**
         * 选择器类型
         *
         * date 日期
         *
         * daterange 日期范围
         *
         * datetime 日期时间
         *
         * datetimerange 日期时间范围
         */
        type UniDatetimePickerType = _UniDatetimePickerType;
        /** 值类型 */
        type UniDatetimePickerValue = _UniDatetimePickerValue;
        /**
         * 最小值
         *
         * string 日期字符串
         *
         * number 时间戳
         */
        type UniDatetimePickerStart = _UniDatetimePickerStart;
        /**
         * 最大值
         *
         * string 日期字符串
         *
         * number 时间戳
         */
        type UniDatetimePickerEnd = _UniDatetimePickerEnd;
        /** 返回值类型 */
        type UniDatetimePickerReturnType = _UniDatetimePickerReturnType;
        /** 打开弹出层 */
        interface UniDatetimePickerShow extends _UniDatetimePickerShow {
        }
        /** 关闭弹出层 */
        interface UniDatetimePickerClose extends _UniDatetimePickerClose {
        }
        /** 清除上次选中的状态和值 */
        interface UniDatetimePickerClear extends _UniDatetimePickerClear {
        }
        /** 确定日期时间时触发的事件 */
        interface UniDatetimePickerOnChange extends _UniDatetimePickerOnChange {
        }
        /** 点击遮罩层触发 */
        interface UniDatetimePickerOnMaskClick extends _UniDatetimePickerOnMaskClick {
        }
        type UniDatetimePickerProps = _UniDatetimePickerProps;
        /** 支持时间戳输入和输出（起始时间、终止时间也支持时间戳），可同时选择日期和时间 */
        type UniDatetimePicker = _UniDatetimePicker;
        type UniDatetimePickerInstance = _UniDatetimePickerInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 支持时间戳输入和输出（起始时间、终止时间也支持时间戳），可同时选择日期和时间 */
        UniDatetimePicker: _UniDatetimePicker;
    }
}

/**
 * 抽屉滑出位置
 *
 * left 从左侧滑出
 *
 * right 从右侧滑出
 */
type _UniDrawerMode = 'left' | 'right';
/** 打开抽屉 */
interface _UniDrawerOpen {
    (): void;
}
/** 关闭抽屉 */
interface _UniDrawerClose {
    (): void;
}
/** 抽屉状态发生变化时触发 */
interface _UniDrawerOnChange {
    (isDrawerOpen: boolean): void;
}
/** 抽屉侧滑菜单属性 */
type _UniDrawerProps = Partial<{
    /**
     * 是否显示遮罩
     *
     * 默认为 true
     */
    mask: boolean;
    /**
     * 点击遮罩是否可以关闭抽屉
     *
     * 默认为 true
     */
    maskClick: boolean;
    /**
     * 抽屉滑出位置
     *
     * left 从左侧滑出
     *
     * right 从右侧滑出
     *
     * 默认为 left
     */
    mode: _UniDrawerMode;
    /**
     * 宽度
     *
     * 单位为 px
     *
     * 默认为 220
     */
    width: number;
    /** 打开抽屉 */
    open: _UniDrawerOpen;
    /** 关闭抽屉 */
    close: _UniDrawerClose;
    /** 抽屉状态发生变化时触发 */
    onChange: _UniDrawerOnChange;
}>;
/** 抽屉侧滑菜单 */
type _UniDrawer = Component<_UniDrawerProps>;
/** 抽屉侧滑菜单实例 */
type _UniDrawerInstance = InstanceType<_UniDrawer>;

declare global {
    namespace UniHelper {
        /**
         * 抽屉滑出位置
         *
         * left 从左侧滑出
         *
         * right 从右侧滑出
         */
        type UniDrawerMode = _UniDrawerMode;
        /** 打开抽屉 */
        interface UniDrawerOpen extends _UniDrawerOpen {
        }
        /** 关闭抽屉 */
        interface UniDrawerClose extends _UniDrawerClose {
        }
        /** 抽屉状态发生变化时触发 */
        interface UniDrawerOnChange extends _UniDrawerOnChange {
        }
        /** 抽屉侧滑菜单属性 */
        type UniDrawerProps = _UniDrawerProps;
        /** 抽屉侧滑菜单 */
        type UniDrawer = _UniDrawer;
        /** 抽屉侧滑菜单实例 */
        type UniDrawerInstance = _UniDrawerInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 抽屉侧滑菜单 */
        UniDrawer: _UniDrawer;
    }
}

/** 输入内容 */
type _UniEasyinputValue = string | number;
/**
 * 输入框的类型
 *
 * text 文字输入键盘
 *
 * textarea 多行文本输入键盘
 *
 * password 密码输入键盘
 *
 * number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
 *
 * idcard 身份证输入键盘
 *
 * digit 带小数点的数字键盘
 */
type _UniEasyinputType = 'text' | 'textarea' | 'password' | 'number' | 'idcard' | 'digit';
/**
 * 设置键盘右下角按钮的文字
 *
 * type="text" 时有效
 *
 * send 发送
 *
 * search 搜索
 *
 * next 下一个
 *
 * go 前往
 *
 * done 完成
 */
type _UniEasyinputOnConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';
/**
 * 自动去除空格的类型
 *
 * true 去除左右空格
 *
 * false 不去除左右空格
 *
 * both 去除两端空格
 *
 * left 去除左侧空格
 *
 * right 去除右侧空格
 *
 * all 去除所有空格
 *
 * none 不去除空格
 */
type _UniEasyinputTrim = boolean | 'both' | 'left' | 'right' | 'all' | 'none';
/** 自定义样式 */
interface _UniEasyinputStyles {
    /**
     * 输入文字颜色
     *
     * 默认为 #333
     */
    color: string;
    /**
     * 输入框背景色
     *
     * 默认为 #fff
     */
    backgroundColor: string;
    /**
     * 输入框禁用背景色
     *
     * 默认为 #f7f6f6
     */
    disableColor: string;
    /**
     * 边框颜色
     *
     * 默认为 #e5e5e5
     */
    borderColor: string;
}
/** 图标位置 */
type _UniEasyinputIconPosition = 'prefix' | 'suffix';
/** 输入框发生变化时触发 */
interface _UniEasyinputOnInput {
    (value: _UniEasyinputValue): void;
}
/** 清除时触发 */
interface _UniEasyinputOnClear {
    (): void;
}
interface _UniEasyinputOnFocusDetail {
    value: _UniEasyinputValue;
    /** 键盘高度 */
    height?: number;
}
type _UniEasyinputOnFocusEvent = CustomEvent<_UniEasyinputOnFocusDetail>;
/** 输入框获得焦点时触发 */
interface _UniEasyinputOnFocus {
    (event: _UniEasyinputOnFocusEvent): void;
}
interface _UniEasyinputOnBlurDetail {
    value: _UniEasyinputValue;
    /** 光标位置 */
    cursor?: number;
}
type _UniEasyinputOnBlurEvent = CustomEvent<_UniEasyinputOnBlurDetail>;
/** 输入框失去焦点时触发 */
interface _UniEasyinputOnBlur {
    (event: _UniEasyinputOnBlurEvent): void;
}
/** 点击完成时触发 */
interface _UniEasyinputOnConfirm {
    (value: _UniEasyinputValue): void;
}
/** 点击图标时触发 */
interface _UniEasyinputOnIconClick {
    (position: _UniEasyinputIconPosition): void;
}
/** 输入框失去焦点或用户按下回车时触发 */
interface _UniEasyinputOnChange {
    (value: _UniEasyinputValue): void;
}
type _UniEasyinputProps = Partial<{
    /** 名称 */
    name: string;
    /** 输入内容 */
    value: _UniEasyinputValue;
    /**
     * 输入框的类型
     *
     * text 文字输入键盘
     *
     * textarea 多行文本输入键盘
     *
     * password 密码输入键盘
     *
     * number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
     *
     * idcard 身份证输入键盘
     *
     * digit 带小数点的数字键盘
     *
     * 默认为 text
     */
    type: _UniEasyinputType;
    /**
     * 是否显示右侧清空内容的图标控件
     *
     * 输入框有内容且不禁用时显示
     *
     * 点击可清空输入框内容
     *
     * 默认为 true
     */
    clearable: boolean;
    /**
     * 是否自动增高输入区域
     *
     * type="textarea" 时有效
     *
     * 默认为 false
     */
    autoHeight: boolean;
    /** 输入框的提示文字 */
    placeholder: string;
    /** 提示文字样式 */
    placeholderStyle: string;
    /**
     * 是否自动获得焦点
     *
     * 默认为 false
     */
    focus: boolean;
    /**
     * 是否不可输入
     *
     * 默认为 false
     */
    disabled: boolean;
    /**
     * 最大输入长度
     *
     * 设置为 -1 时不限制最大长度
     *
     * 默认为 140
     */
    maxlength: number;
    /**
     * 设置键盘右下角按钮的文字
     *
     * type="text" 时有效
     *
     * send 发送
     *
     * search 搜索
     *
     * next 下一个
     *
     * go 前往
     *
     * done 完成
     *
     * 默认为 done
     */
    confirmType: _UniEasyinputOnConfirmType;
    /**
     * 清除图标的大小
     *
     * 单位为 px
     *
     * 默认为 24
     */
    clearSize: number;
    /** 输入框头部图标 */
    prefixIcon: string;
    /** 输入框尾部图标 */
    suffixIcon: string;
    /**
     * 是否自动去除空格
     *
     * true 去除左右空格
     *
     * false 不去除左右空格
     *
     * both 去除两端空格
     *
     * left 去除左侧空格
     *
     * right 去除右侧空格
     *
     * all 去除所有空格
     *
     * none 不去除空格
     *
     * 默认为 true
     */
    trim: _UniEasyinputTrim;
    /**
     * 是否显示输入框边框
     *
     * 默认为 true
     */
    inputBorder: boolean;
    /** 自定义样式 */
    styles: _UniEasyinputStyles;
    /**
     * 是否显示眼睛图标
     *
     * type="password" 时有效
     *
     * 默认为 true
     */
    passwordIcon: boolean;
    /**
     * 主题色
     *
     * 默认为 #2979ff
     */
    primaryColor: string;
    /** 错误信息 */
    errorMessage: string;
    /** 输入框发生变化时触发 */
    onInput: _UniEasyinputOnInput;
    /** 清除时触发 */
    onClear: _UniEasyinputOnClear;
    /** 输入框获得焦点时触发 */
    onFocus: _UniEasyinputOnFocus;
    /** 输入框失去焦点时触发 */
    onBlur: _UniEasyinputOnBlur;
    /** 点击完成时触发 */
    onConfirm: _UniEasyinputOnConfirm;
    /** 点击图标时触发 */
    onIconClick: _UniEasyinputOnIconClick;
    /** 输入框失去焦点或用户按下回车时触发 */
    onChange: _UniEasyinputOnChange;
}>;
/** 对原生 input 组件的增强 */
type _UniEasyinput = Component<_UniEasyinputProps>;
type _UniEasyinputInstance = InstanceType<_UniEasyinput>;

declare global {
    namespace UniHelper {
        /** 输入内容 */
        type UniEasyinputValue = _UniEasyinputValue;
        /**
         * 输入框的类型
         *
         * text 文字输入键盘
         *
         * textarea 多行文本输入键盘
         *
         * password 密码输入键盘
         *
         * number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
         *
         * idcard 身份证输入键盘
         *
         * digit 带小数点的数字键盘
         */
        type UniEasyinputType = _UniEasyinputType;
        /**
         * 设置键盘右下角按钮的文字
         *
         * type="text" 时有效
         *
         * send 发送
         *
         * search 搜索
         *
         * next 下一个
         *
         * go 前往
         *
         * done 完成
         */
        type UniEasyinputOnConfirmType = _UniEasyinputOnConfirmType;
        /**
         * 自动去除空格的类型
         *
         * true 去除左右空格
         *
         * false 不去除左右空格
         *
         * both 去除两端空格
         *
         * left 去除左侧空格
         *
         * right 去除右侧空格
         *
         * all 去除所有空格
         *
         * none 不去除空格
         */
        type UniEasyinputTrim = _UniEasyinputTrim;
        /** 自定义样式 */
        type UniEasyinputStyles = _UniEasyinputStyles;
        /** 图标位置 */
        type UniEasyinputIconPosition = _UniEasyinputIconPosition;
        /** 输入框发生变化时触发 */
        interface UniEasyinputOnInput extends _UniEasyinputOnInput {
        }
        /** 清除时触发 */
        interface UniEasyinputOnClear extends _UniEasyinputOnClear {
        }
        interface UniEasyinputOnFocusDetail extends _UniEasyinputOnFocusDetail {
        }
        type UniEasyinputOnFocusEvent = _UniEasyinputOnFocusEvent;
        /** 输入框获得焦点时触发 */
        interface UniEasyinputOnFocus extends _UniEasyinputOnFocus {
        }
        interface UniEasyinputOnBlurDetail extends _UniEasyinputOnBlurDetail {
        }
        type UniEasyinputOnBlurEvent = _UniEasyinputOnBlurEvent;
        /** 输入框失去焦点时触发 */
        interface UniEasyinputOnBlur extends _UniEasyinputOnBlur {
        }
        /** 点击完成时触发 */
        interface UniEasyinputOnConfirm extends _UniEasyinputOnConfirm {
        }
        /** 点击图标时触发 */
        interface UniEasyinputOnIconClick extends _UniEasyinputOnIconClick {
        }
        /** 输入框失去焦点或用户按下回车时触发 */
        interface UniEasyinputOnChange extends _UniEasyinputOnChange {
        }
        type UniEasyinputProps = _UniEasyinputProps;
        /** 对原生 input 组件的增强 */
        type UniEasyinput = _UniEasyinput;
        type UniEasyinputInstance = _UniEasyinputInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 对原生 input 组件的增强 */
        UniEasyinput: _UniEasyinput;
    }
}

/** 图标类型 */
type _UniIconsType = 'color' | 'wallet' | 'settings-filled' | 'auth-filled' | 'shop-filled' | 'staff-filled' | 'vip-filled' | 'plus-filled' | 'folder-add-filled' | 'color-filled' | 'tune-filled' | 'calendar-filled' | 'notification-filled' | 'wallet-filled' | 'medal-filled' | 'gift-filled' | 'fire-filled' | 'refreshempty' | 'location-filled' | 'person-filled' | 'personadd-filled' | 'back' | 'forward' | 'arrow-right' | 'arrow-left' | 'arrow-up' | 'arrow-down' | 'bottom' | 'right' | 'top' | 'left' | 'eye' | 'eye-filled' | 'eye-slash' | 'eye-slash-filled' | 'info-filled' | 'reload' | 'micoff-filled' | 'map-pin-ellipse' | 'map-pin' | 'location' | 'starhalf' | 'star' | 'star-filled' | 'calendar' | 'fire' | 'medal' | 'font' | 'gift' | 'link' | 'notification' | 'staff' | 'vip' | 'folder-add' | 'tune' | 'auth' | 'person' | 'email-filled' | 'phone-filled' | 'phone' | 'email' | 'personadd' | 'chatboxes-filled' | 'contact' | 'chatbubble-filled' | 'contact-filled' | 'chatboxes' | 'chatbubble' | 'upload-filled' | 'upload' | 'weixin' | 'compose' | 'qq' | 'download-filled' | 'pyq' | 'sound' | 'trash-filled' | 'sound-filled' | 'trash' | 'videocam-filled' | 'spinner-cycle' | 'weibo' | 'videocam' | 'download' | 'help' | 'navigate-filled' | 'plusempty' | 'smallcircle' | 'minus-filled' | 'micoff' | 'closeempty' | 'clear' | 'navigate' | 'minus' | 'image' | 'mic' | 'paperplane' | 'close' | 'help-filled' | 'paperplane-filled' | 'plus' | 'mic-filled' | 'image-filled' | 'locked-filled' | 'info' | 'locked' | 'camera-filled' | 'chat-filled' | 'camera' | 'circle' | 'checkmarkempty' | 'chat' | 'circle-filled' | 'flag' | 'flag-filled' | 'gear-filled' | 'home' | 'home-filled' | 'gear' | 'smallcircle-filled' | 'map-filled' | 'map' | 'refresh-filled' | 'refresh' | 'cloud-upload' | 'cloud-download-filled' | 'cloud-download' | 'cloud-upload-filled' | 'redo' | 'images-filled' | 'undo-filled' | 'more' | 'more-filled' | 'undo' | 'images' | 'paperclip' | 'settings' | 'search' | 'redo-filled' | 'list' | 'mail-open-filled' | 'hand-down-filled' | 'hand-down' | 'hand-up-filled' | 'hand-up' | 'heart-filled' | 'mail-open' | 'heart' | 'loop' | 'pulldown' | 'scan' | 'bars' | 'cart-filled' | 'checkbox' | 'checkbox-filled' | 'shop' | 'headphones' | 'cart';
/** 自定义图标类型 */
type _UniIconsCustomType = `icon-${string}`;
/** 图标属性 */
type _UniIconsProps = Partial<{
    /**
     * 图标大小
     *
     * 如果传入 number 默认使用 px
     *
     * 可传入其他自定义单位的宽度值
     *
     * 默认为 16
     */
    size: number | string;
    /**
     * 图标图案
     *
     * 默认为 空字符串
     */
    type: _UniIconsType | _UniIconsCustomType;
    /**
     * 图标颜色
     *
     * 默认为 #333333
     */
    color: string;
    /**
     * 自定义图标
     *
     * 默认为 空字符串
     */
    customPrefix: string;
}>;
/** 图标 */
type _UniIcons = Component<_UniIconsProps>;
/** 图标实例 */
type _UniIconsInstance = InstanceType<_UniIcons>;

declare global {
    namespace UniHelper {
        /** 图标类型 */
        type UniIconsType = _UniIconsType;
        /** 自定义图标类型 */
        type UniIconsCustomType = _UniIconsCustomType;
        /** 图标属性 */
        type UniIconsProps = _UniIconsProps;
        /** 图标 */
        type UniIcons = _UniIcons;
        /** 图标实例 */
        type UniIconsInstance = _UniIconsInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 图标 */
        UniIcons: _UniIcons;
    }
}

/** 可选样式配置项 */
interface _UniFabPattern {
    /**
     * 文字默认颜色
     *
     * 默认为 #3c3e49
     */
    color?: string;
    /**
     * 文字选中时的颜色
     *
     * 默认为 #007aff
     */
    selectedColor?: string;
    /**
     * 背景色
     *
     * 默认为 #fff
     */
    backgroundColor?: string;
    /**
     * 按钮背景色
     *
     * 默认为 #007a7ff
     */
    buttonColor?: string;
    /**
     * 图标颜色
     *
     * 默认为 #fff
     */
    iconColor?: string;
    /**
     * 图标类型
     *
     * 默认为 plusempty
     */
    icon?: _UniIconsType | _UniIconsCustomType;
}
/**
 * 水平对齐方式
 *
 * left 左对齐
 *
 * right 右对齐
 */
type _UniFabHorizontal = 'left' | 'right';
/**
 * 垂直对齐方式
 *
 * bottom 下对齐
 *
 * top 上对齐
 */
type _UniFabVertical = 'bottom' | 'top';
/**
 * 展开菜单显示方式
 *
 * horizontal 水平显示
 *
 * vertical 垂直显示
 */
type _UniFabDirection = 'horizontal' | 'vertical';
/** 展开菜单内容配置项 */
interface _UniFabContentItem {
    /** 图片路径 */
    iconPath: string;
    /** 选中后图片路径 */
    selectedIconPath: string;
    /** 文字 */
    text: string;
    /** 是否选中当前 */
    active: boolean;
}
/** 展开菜单内容配置 */
type _UniFabContent = _UniFabContentItem[];
interface _UniFabOnTriggerEvent {
    index: number;
    item: _UniFabContentItem;
}
/** 展开菜单点击事件，返回点击信息 */
interface _UniFabOnTrigger {
    (event: _UniFabOnTriggerEvent): void;
}
/** 悬浮按钮点击事件 */
interface _UniFabOnFabClick {
    (): void;
}
type _UniFabProps = Partial<{
    /** 可选样式配置项 */
    pattern: _UniFabPattern;
    /**
     * 水平对齐方式
     *
     * left 左对齐
     *
     * right 右对齐
     *
     * 默认为 left
     */
    horizontal: _UniFabHorizontal;
    /**
     * 垂直对齐方式
     *
     * bottom 下对齐
     *
     * top 上对齐
     *
     * 默认为 bottom
     */
    vertical: _UniFabVertical;
    /**
     * 展开菜单显示方式
     *
     * horizontal 水平显示
     *
     * vertical 垂直显示
     *
     * 默认为 horizontal
     */
    direction: _UniFabDirection;
    /**
     * 是否使用弹出菜单
     *
     * 默认为 true
     */
    popMenu: boolean;
    /** 展开菜单内容配置 */
    content: _UniFabContent;
    /** 展开菜单点击事件，返回点击信息 */
    onTrigger: _UniFabOnTrigger;
    /** 悬浮按钮点击事件 */
    onFabClick: _UniFabOnFabClick;
}>;
/** 点击可展开一个图形按钮菜单 */
type _UniFab = Component<_UniFabProps>;
type _UniFabInstance = InstanceType<_UniFab>;

declare global {
    namespace UniHelper {
        /** 可选样式配置项 */
        type UniFabPattern = _UniFabPattern;
        /**
         * 水平对齐方式
         *
         * left 左对齐
         *
         * right 右对齐
         */
        type UniFabHorizontal = _UniFabHorizontal;
        /**
         * 垂直对齐方式
         *
         * bottom 下对齐
         *
         * top 上对齐
         */
        type UniFabVertical = _UniFabVertical;
        /**
         * 展开菜单显示方式
         *
         * horizontal 水平显示
         *
         * vertical 垂直显示
         */
        type UniFabDirection = _UniFabDirection;
        /** 展开菜单内容配置项 */
        interface UniFabContentItem extends _UniFabContentItem {
        }
        /** 展开菜单内容配置 */
        type UniFabContent = _UniFabContent;
        type UniFabOnTriggerEvent = _UniFabOnTriggerEvent;
        /** 展开菜单点击事件，返回点击信息 */
        interface UniFabOnTrigger extends _UniFabOnTrigger {
        }
        /** 悬浮按钮点击事件 */
        interface UniFabOnFabClick extends _UniFabOnFabClick {
        }
        type UniFabProps = _UniFabProps;
        /** 点击可展开一个图形按钮菜单 */
        type UniFab = _UniFab;
        type UniFabInstance = _UniFabInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 点击可展开一个图形按钮菜单 */
        UniFab: _UniFab;
    }
}

/** 收藏按钮文字 */
interface _UniFavContentText {
    /**
     * 未收藏文字
     *
     * 默认为 收藏
     */
    contentDefault: string;
    /**
     * 已收藏文字
     *
     * 默认为 已收藏
     */
    contentFav: string;
}
/** 点击触发 */
interface _UniFavOnClick {
    (): void;
}
type _UniFavProps = Partial<{
    /**
     * 按钮是否带星
     *
     * 默认为 true
     */
    star: boolean;
    /**
     * 未收藏时背景色
     *
     * 默认为 #eeeeee
     */
    bgColor: string;
    /**
     * 已收藏时背景色
     *
     * 默认为 #007aff
     */
    bgColorChecked: string;
    /**
     * 未收藏时文字颜色
     *
     * 默认为 #666666
     */
    fgColor: string;
    /**
     * 已收藏时文字颜色
     *
     * 默认为 #ffffff
     */
    fgColorChecked: string;
    /**
     * 是否为圆角
     *
     * 默认为 false
     */
    circle: boolean;
    /**
     * 是否为已收藏
     *
     * 默认为 false
     */
    checked: boolean;
    /** 收藏按钮文字 */
    contentText: _UniFavContentText;
    /** 点击触发 */
    onClick: _UniFavOnClick;
}>;
/** 用于收藏功能，可点击切换选中、不选中的状态 */
type _UniFav = Component<_UniFavProps>;
type _UniFavInstance = InstanceType<_UniFav>;

declare global {
    namespace UniHelper {
        /** 收藏按钮文字 */
        interface UniFavContentText extends _UniFavContentText {
        }
        /** 点击触发 */
        interface UniFavOnClick extends _UniFavOnClick {
        }
        type UniFavProps = _UniFavProps;
        /** 用于收藏功能，可点击切换选中、不选中的状态 */
        type UniFav = _UniFav;
        type UniFavInstance = _UniFavInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 用于收藏功能，可点击切换选中、不选中的状态 */
        UniFav: _UniFav;
    }
}

interface _UniFilePickerValue {
    name: string;
    extname: string;
    url: string;
}
/**
 * 选择文件后的文件列表样式
 *
 * list 列表
 *
 * grid 网格
 */
type _UniFilePickerMode = 'list' | 'grid';
/**
 * 选择文件类型
 *
 * image 图片
 *
 * video 视频
 *
 * all 全部
 */
type _UniFilePickerFileMediatype = 'image' | 'video' | 'all';
/**
 * 文件类型
 *
 * image 图片
 *
 * video 视频
 */
type _UniFilePickerFileType = Exclude<_UniFilePickerFileMediatype, 'all'>;
/**
 * 样式
 *
 * mode="list" 时有效
 */
interface _UniFilePickerListStyles {
    /** 边框样式 */
    borderStyle?: {
        /**
         * 颜色
         *
         * 默认为 #eee
         */
        color?: string;
        /**
         * 宽度
         *
         * 默认为 1px
         */
        width?: string;
        /**
         * 样式
         *
         * 默认为 solid
         */
        style?: string;
        /**
         * 边框圆角
         *
         * 不支持百分比
         *
         * 默认为 5px
         */
        radius?: string;
    };
    /**
     * 是否显示边框
     *
     * 默认为 true
     */
    border?: boolean;
    /**
     * 是否显示分隔线
     *
     * 默认为 true
     */
    dividline?: boolean;
}
/**
 * 样式
 *
 * mode="grid" 时有效
 */
interface _UniFilePickerImageStyles {
    /**
     * 高度
     *
     * 默认为 auto
     */
    height?: number | string;
    /**
     * 宽度
     *
     * 默认为 auto
     */
    width?: number | string;
    /** 边框样式 */
    border?: {
        /**
         * 颜色
         *
         * 默认为 #eee
         */
        color?: string;
        /**
         * 宽度
         *
         * 默认为 1px
         */
        width?: string;
        /**
         * 样式
         *
         * 默认为 solid
         */
        style?: string;
        /**
         * 边框圆角
         *
         * 支持百分比
         *
         * 默认为 3px
         */
        radius?: string;
    };
}
/**
 * original 原图
 *
 * compressed 压缩图
 */
type _UniFilePickerSizeTypeItem = 'original' | 'compressed';
/**
 * 尺寸类型
 *
 * original 原图
 *
 * compressed 压缩图
 */
type _UniFilePickerSizeType = _UniFilePickerSizeTypeItem[];
/**
 * album 从相册选图
 *
 * camera 使用相机
 */
type _UniFilePickerSourceTypeItem = 'album' | 'camera';
/**
 * 来源类型
 *
 * album 从相册选图
 *
 * camera 使用相机
 */
type _UniFilePickerSourceType = _UniFilePickerSourceTypeItem[];
/** 手动上传 */
interface _UniFilePickerUpload {
    (): void;
}
/**
 * 清除选择结果
 *
 * 传入下标则删除指定下标文件
 *
 * 不传入下标则删除所有
 */
interface _UniFilePickerClearFiles {
    (index?: number): void;
}
interface _UniFilePickerFileImage {
    width: number;
    height: number;
    location: string;
}
/** 文件状态 */
type _UniFilePickerFileStatus = 'ready' | 'error' | 'success';
interface _UniFilePickerBaseFile {
    cloudPath: string;
    /** 文件后缀名，不含 . */
    extname: string;
    /**
     * 文件类型
     *
     * image 图片
     *
     * video 视频
     */
    fileType: _UniFilePickerFileType;
    /** 图片信息 */
    image?: _UniFilePickerFileImage;
    /** 视频信息，预留但未使用，请从 file 属性中获取视频信息 */
    video?: Record<string, never>;
    /** 临时名称 */
    name: string;
    /** 临时路径 */
    path: string;
    /** 文件大小 */
    size: number;
    /** 文件状态 */
    status: _UniFilePickerFileStatus;
    /** 临时路径，建议使用 path */
    url: string;
    /** 唯一标识 */
    uuid: string;
}
interface _UniFilePickerTempFileFile extends File {
    cloudPath: string;
    /**
     * 文件类型
     *
     * image 图片
     *
     * video 视频
     */
    fileType: _UniFilePickerFileType;
    /** 临时名称 */
    name: string;
    /** 临时路径 */
    path: string;
    /** 文件大小 */
    size: number;
    /** 唯一标识 */
    uuid: string;
    /** 视频宽度 */
    width?: number;
    /** 视频的高度 */
    height?: number;
    /** 视频时长，单位 s */
    duration?: number;
}
interface _UniFilePickerTempFile extends _UniFilePickerBaseFile {
    /** 文件内容 */
    file: _UniFilePickerTempFileFile;
    /** 上传进度 */
    progress: number;
}
interface _UniFilePickerCallbackFile extends _UniFilePickerBaseFile {
    /** 文件云上 ID */
    fileID: string;
}
interface _UniFilePickerOnSelectEvent {
    /** 文件信息 */
    tempFiles: _UniFilePickerTempFile[];
    /** 文件临时路径 */
    tempFilePaths: string[];
}
/** 选择文件后触发 */
interface _UniFilePickerOnSelect {
    (event: _UniFilePickerOnSelectEvent): void;
}
interface _UniFilePickerOnProgressEvent {
    /** 上传进度 */
    progress: number;
    /** 上传文件索引 */
    index: number;
    /** 文件信息 */
    tempFile: _UniFilePickerTempFile;
}
/** 文件上传时触发 */
interface _UniFilePickerOnProgress {
    (event: _UniFilePickerOnProgressEvent): void;
}
interface _UniFilePickerOnSuccessEvent {
    /** 文件云上路径 */
    tempFilePaths: string[];
    /** 文件云上信息 */
    tempFiles: _UniFilePickerCallbackFile[];
}
/** 上传成功触发 */
interface _UniFilePickerOnSuccess {
    (event: _UniFilePickerOnSuccessEvent): void;
}
interface _UniFilePickerOnFailEvent {
    /** 文件临时路径 */
    tempFilePaths: string[];
    /** 文件信息 */
    tempFiles: _UniFilePickerCallbackFile[];
}
/** 上传失败触发 */
interface _UniFilePickerOnFail {
    (event: _UniFilePickerOnFailEvent): void;
}
interface _UniFilePickerOnDeleteEvent {
    /** 删除的文件信息 */
    tempFile: _UniFilePickerTempFile;
    /** 删除的文件临时路径 */
    tempFilePath: string;
}
/** 文件从列表移除时触发 */
interface _UniFilePickerOnDelete {
    (event: _UniFilePickerOnDeleteEvent): void;
}
type _UniFilePickerBaseProps = Partial<{
    /**
     * 组件是否禁用
     *
     * 默认为 false
     */
    disabled: boolean;
    /**
     * 组件只读，不可选择，不显示进度，不显示删除按钮
     *
     * 默认为 false
     */
    readonly: boolean;
    /**
     * 选择文件后的文件列表样式
     *
     * list 列表
     *
     * grid 网格
     *
     * 默认为 list
     */
    mode: _UniFilePickerMode;
    /**
     * 是否禁用图片预览
     *
     * mode="grid" 时有效
     *
     * 默认为 false
     */
    disablePreview: boolean;
    /**
     * 是否显示删除按钮
     *
     * 默认为 true
     */
    delIcon: boolean;
    /**
     * 是否自动上传
     *
     * false 只触发 select 事件，可自行上传
     *
     * true 自动上传
     *
     * 默认为 true
     */
    autoUpload: boolean;
    /**
     * 最大选择个数
     *
     * 默认为 9
     */
    limit: number | string;
    /** 组件标题，右侧显示上传计数 */
    title: string;
    /**
     * 选择文件类型
     *
     * image 图片
     *
     * video 视频
     *
     * all 全部
     *
     * 默认为 image
     */
    fileMediatype: _UniFilePickerFileMediatype;
    /**
     * 选择文件后缀，字符串的情况下需要用逗号分隔
     *
     * 推荐使用字符串
     *
     * 根据 file-mediatype 属性而不同
     *
     * 默认为 []
     */
    fileExtname: string | string[];
    /**
     * 样式
     *
     * mode="list" 时有效
     */
    listStyles: _UniFilePickerListStyles;
    /**
     * 样式
     *
     * mode="grid" 时有效
     */
    imageStyles: _UniFilePickerImageStyles;
    /**
     * 尺寸类型
     *
     * original 原图
     *
     * compressed 压缩图
     *
     * 默认为 ['original', 'compressed']
     */
    sizeType: _UniFilePickerSizeType;
    /**
     * 来源类型
     *
     * album 从相册选图
     *
     * camera 使用相机
     *
     * 默认为 ['album', 'camera']
     */
    sourceType: _UniFilePickerSourceType;
    /** 手动上传 */
    upload: _UniFilePickerUpload;
    /**
     * 清除选择结果
     *
     * 传入下标则删除指定下标文件
     *
     * 不传入下标则删除所有
     */
    clearFiles: _UniFilePickerClearFiles;
    /** 选择文件后触发 */
    onSelect: _UniFilePickerOnSelect;
    /** 文件上传时触发 */
    onProgress: _UniFilePickerOnProgress;
    /** 上传成功触发 */
    onSuccess: _UniFilePickerOnSuccess;
    /** 上传失败触发 */
    onFail: _UniFilePickerOnFail;
    /** 文件从列表移除时触发 */
    onDelete: _UniFilePickerOnDelete;
}>;
type _UniFilePickerArrayProps = _UniFilePickerBaseProps & Partial<{
    /** 组件数据，通常用来回显 */
    value: _UniFilePickerValue[];
    /** 限制 value 类型 */
    returnType?: 'array';
}>;
type _UniFilePickerObjectProps = _UniFilePickerBaseProps & Partial<{
    /** 组件数据，通常用来回显 */
    value: _UniFilePickerValue;
    /**
     * 限制 value 类型
     *
     * 只能单选，且会覆盖
     */
    returnType: 'object';
}>;
/** 文件选择上传组件属性 */
type _UniFilePickerProps = _UniFilePickerArrayProps | _UniFilePickerObjectProps;
/** 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间 */
type _UniFilePicker = Component<_UniFilePickerProps>;
/** 文件选择上传组件属性 */
type _UniFilePickerInstance = InstanceType<_UniFilePicker>;

declare global {
    namespace UniHelper {
        interface UniFilePickerValue extends _UniFilePickerValue {
        }
        /**
         * 选择文件后的文件列表样式
         *
         * list 列表
         *
         * grid 网格
         */
        type UniFilePickerMode = _UniFilePickerMode;
        /**
         * 选择文件类型
         *
         * image 图片
         *
         * video 视频
         *
         * all 全部
         */
        type UniFilePickerFileMediatype = _UniFilePickerFileMediatype;
        /**
         * 文件类型
         *
         * image 图片
         *
         * video 视频
         */
        type UniFilePickerFileType = _UniFilePickerFileType;
        /**
         * 样式
         *
         * mode="list" 时有效
         */
        interface UniFilePickerListStyles extends _UniFilePickerListStyles {
        }
        /**
         * 样式
         *
         * mode="grid" 时有效
         */
        interface UniFilePickerImageStyles extends _UniFilePickerImageStyles {
        }
        /**
         * original 原图
         *
         * compressed 压缩图
         */
        type UniFilePickerSizeTypeItem = _UniFilePickerSizeTypeItem;
        /**
         * 尺寸类型
         *
         * original 原图
         *
         * compressed 压缩图
         */
        type UniFilePickerSizeType = _UniFilePickerSizeType;
        /**
         * album 从相册选图
         *
         * camera 使用相机
         */
        type UniFilePickerSourceTypeItem = _UniFilePickerSourceTypeItem;
        /**
         * 来源类型
         *
         * album 从相册选图
         *
         * camera 使用相机
         */
        type UniFilePickerSourceType = _UniFilePickerSourceType;
        /** 手动上传 */
        interface UniFilePickerUpload extends _UniFilePickerUpload {
        }
        /**
         * 清除选择结果
         *
         * 传入下标则删除指定下标文件
         *
         * 不传入下标则删除所有
         */
        interface UniFilePickerClearFiles extends _UniFilePickerClearFiles {
        }
        interface UniFilePickerFileImage extends _UniFilePickerFileImage {
        }
        /** 文件状态 */
        type UniFilePickerFileStatus = _UniFilePickerFileStatus;
        interface UniFilePickerBaseFile extends _UniFilePickerBaseFile {
        }
        interface UniFilePickerTempFileFile extends _UniFilePickerTempFileFile {
        }
        interface UniFilePickerTempFile extends _UniFilePickerTempFile {
        }
        interface UniFilePickerCallbackFile extends _UniFilePickerCallbackFile {
        }
        type UniFilePickerOnSelectEvent = _UniFilePickerOnSelectEvent;
        /** 选择文件后触发 */
        interface UniFilePickerOnSelect extends _UniFilePickerOnSelect {
        }
        type UniFilePickerOnProgressEvent = _UniFilePickerOnProgressEvent;
        /** 文件上传时触发 */
        interface UniFilePickerOnProgress extends _UniFilePickerOnProgress {
        }
        type UniFilePickerOnSuccessEvent = _UniFilePickerOnSuccessEvent;
        /** 上传成功触发 */
        interface UniFilePickerOnSuccess extends _UniFilePickerOnSuccess {
        }
        type UniFilePickerOnFailEvent = _UniFilePickerOnFailEvent;
        /** 上传失败触发 */
        interface UniFilePickerOnFail extends _UniFilePickerOnFail {
        }
        type UniFilePickerOnDeleteEvent = _UniFilePickerOnDeleteEvent;
        /** 文件从列表移除时触发 */
        interface UniFilePickerOnDelete extends _UniFilePickerOnDelete {
        }
        type UniFilePickerBaseProps = _UniFilePickerBaseProps;
        type UniFilePickerArrayProps = _UniFilePickerArrayProps;
        type UniFilePickerObjectProps = _UniFilePickerObjectProps;
        /** 文件选择上传组件属性 */
        type UniFilePickerProps = _UniFilePickerProps;
        /** 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间 */
        type UniFilePicker = _UniFilePicker;
        /** 文件选择上传组件实例 */
        type UniFilePickerInstance = _UniFilePickerInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间 */
        UniFilePicker: _UniFilePicker;
    }
}

/** 内置校验规则 */
type _UniFormsFormat = 'string' | 'number' | 'boolean' | 'array' | 'object' | 'url' | 'email';
interface _UniFormsCallback {
    (...args: any): any;
}
/**
 * 自定义校验规则方法
 *
 * @param rule 当前校验字段在 rules 中所对应的校验规则
 * @param value 当前校验字段的值
 * @param data 所有校验字段的字段和值的对象
 * @param callback 校验完成时的回调
 */
interface _UniFormsValidateFunction {
    (rule: any, value: any, data: any, callback: _UniFormsCallback): boolean | void | Promise<boolean> | Promise<void>;
}
/** 校验规则 */
interface _UniFormsRulesRule {
    /**
     * 是否必填
     *
     * 配置此参数不会显示输入框左边的必填星号
     */
    required?: boolean;
    /** 数组至少要有一个元素，且数组内每个元素都唯一 */
    range?: any[];
    /**
     * 内置校验规则
     *
     * 默认为 string
     */
    format?: _UniFormsFormat;
    /** 校验用的正则表达式，建议使用字符串表示 */
    pattern?: string | RegExp;
    /** 校验最大值 */
    maximum?: number;
    /** 校验最小值 */
    minimum?: number;
    /** 校验数据最大长度 */
    maxLength?: number;
    /** 校验失败提示信息语 */
    errorMessage?: string;
    /** 自定义校验规则 */
    validateFunction?: _UniFormsValidateFunction;
}
/** 校验规则 */
type _UniFormsRules = Record<string, {
    /** 校验规则 */
    rules?: _UniFormsRulesRule | Array<_UniFormsRulesRule>;
    /** 当前表单域的字段中文名，多用于 errorMessage 的显示，可不填 */
    label?: string;
}>;
/** 表单校验时机 */
type _UniFormsValidateTrigger = 'bind' | 'submit' | 'blur';
/** label 位置 */
type _UniFormsLabelPosition = 'top' | 'left';
/** label 对齐方式 */
type _UniFormsLabelAlign = 'left' | 'center' | 'right';
/**
 * 错误信息提示方式
 *
 * 默认为 undertext
 */
type _UniFormsErrShowType = 'undertext' | 'toast' | 'modal';
/** 动态设置表单规则 */
interface _UniFormsSetRules {
    (rules: _UniFormsRules): void;
}
/**
 * 校验整个表单
 *
 * @param keepItem 不参与校验的字段
 * @param callback 回调函数
 */
interface _UniFormsValidate {
    (keepItem?: string[], callback?: _UniFormsCallback): void | Promise<void>;
    (callback?: _UniFormsCallback): void | Promise<void>;
}
/**
 * 校验部分表单，返回对应表单数据
 *
 * @param items 需要校验的字段
 */
interface _UniFormsValidateField {
    (items?: string | string[]): Promise<any>;
}
/**
 * 移除表单的校验结果
 *
 * @param items 需要移除校验的字段
 */
interface _UniFormsClearValidate {
    (items?: string | string[]): void;
}
/** 任意表单项被校验后触发，返回表单校验信息 */
interface _UniFormsOnValidate {
    (results: any): void;
}
/** 表单属性 */
type _UniFormsProps = Partial<{
    /** 表单数据 */
    model: AnyRecord;
    /** 表单校验规则 */
    rules: _UniFormsRules;
    /**
     * 表单校验时机
     *
     * 默认为 submit
     */
    validateTrigger: _UniFormsValidateTrigger;
    /**
     * label 位置
     *
     * 默认为 left
     */
    labelPosition: _UniFormsLabelPosition;
    /**
     * label 宽度
     *
     * 单位为 px
     *
     * 默认为 65
     */
    labelWidth: string | number;
    /**
     * label 对齐方式
     *
     * 默认为 left
     */
    labelAlign: _UniFormsLabelAlign;
    /**
     * 错误信息提示方式
     *
     * 默认为 undertext
     */
    errShowType: _UniFormsErrShowType;
    /**
     * 是否显示分隔线
     *
     * 默认为 false
     */
    border: boolean;
    /** 动态设置表单规则 */
    setRules: _UniFormsSetRules;
    /**
     * 校验整个表单
     *
     * @param keepItem 不参与校验的字段
     * @param callback 回调函数
     */
    validate: _UniFormsValidate;
    /**
     * 校验部分表单，返回对应表单数据
     *
     * @param items 需要校验的字段
     */
    validateField: _UniFormsValidateField;
    /**
     * 移除表单的校验结果
     *
     * @param items 需要移除校验的字段
     */
    clearValidate: _UniFormsClearValidate;
    /** 任意表单项被校验后触发，返回表单校验信息 */
    onValidate: _UniFormsOnValidate;
}>;
/** 表单，用于提交表单内容，内置了表单验证功能 */
type _UniForms = Component<_UniFormsProps>;
/** 表单实例 */
type _UniFormsInstance = InstanceType<_UniForms>;

declare global {
    namespace UniHelper {
        /** 内置校验规则 */
        type UniFormsFormat = _UniFormsFormat;
        interface UniFormsCallback extends _UniFormsCallback {
        }
        interface UniFormsValidateFunction extends _UniFormsValidateFunction {
        }
        /** 校验规则 */
        interface UniFormsRulesRule extends _UniFormsRulesRule {
        }
        /** 校验规则 */
        type UniFormsRules = _UniFormsRules;
        /** 表单校验时机 */
        type UniFormsValidateTrigger = _UniFormsValidateTrigger;
        /** label 位置 */
        type UniFormsLabelPosition = _UniFormsLabelPosition;
        /** label 对齐方式 */
        type UniFormsLabelAlign = _UniFormsLabelAlign;
        /**
         * 错误信息提示方式
         *
         * 默认为 undertext
         */
        type UniFormsErrShowType = _UniFormsErrShowType;
        /** 动态设置表单规则 */
        interface UniFormsSetRules extends _UniFormsSetRules {
        }
        /**
         * 校验整个表单
         *
         * @param keepItem 不参与校验的字段
         * @param callback 回调函数
         */
        interface UniFormsValidate extends _UniFormsValidate {
        }
        /**
         * 校验部分表单，返回对应表单数据
         *
         * @param items 需要校验的字段
         */
        interface UniFormsValidateField extends _UniFormsValidateField {
        }
        /**
         * 移除表单的校验结果
         *
         * @param items 需要移除校验的字段
         */
        interface UniFormsClearValidate extends _UniFormsClearValidate {
        }
        /** 任意表单项被校验后触发，返回表单校验信息 */
        interface UniFormsOnValidate extends _UniFormsOnValidate {
        }
        /** 表单属性 */
        type UniFormsProps = _UniFormsProps;
        /** 表单，用于提交表单内容，内置了表单验证功能 */
        type UniForms = _UniForms;
        /** 表单属性 */
        type UniFormsInstance = _UniFormsInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 表单，用于提交表单内容，内置了表单验证功能 */
        UniForms: _UniForms;
    }
}

/** 校验规则 */
interface _UniFormsItemRulesRule extends _UniFormsRulesRule {
}
/** 校验规则 */
type _UniFormsItemRules = Array<_UniFormsItemRulesRule>;
/** label 对齐方式 */
type _UniFormsItemLabelAlign = 'left' | 'center' | 'right';
/** 动态设置表单规则 */
interface _UniFormsItemSetRules {
    (rules: _UniFormsItemRules): void;
}
/** 校验子表单 */
interface _UniFormsItemOnFieldChange {
    (value: any): void;
}
type _UniFormsItemProps = Partial<{
    /** 表单域的属性名，在使用校验规则时必填 */
    name: string | string[];
    /** 表单校验规则 */
    rules: _UniFormsItemRules;
    /**
     * label 右边显示红色 * 号，样式显示不会对校验规则产生效果
     *
     * 默认为 false
     */
    required: boolean;
    /** 输入框左边的文字提示 */
    label: string;
    /**
     * label 的宽度
     *
     * 单位为 px
     *
     * 默认为 65
     */
    labelWidth: number;
    /**
     * 显示的错误提示内容
     *
     * 如果为空字符串或 false，则不显示错误信息
     */
    errorMessage: false | string;
    /**
     * label 对齐方式
     *
     * 默认为 left
     */
    labelAlign: _UniFormsItemLabelAlign;
    /** 动态设置表单规则 */
    setRules: _UniFormsItemSetRules;
    /** 校验子表单 */
    onFieldChange: _UniFormsItemOnFieldChange;
}>;
type _UniFormsItem = Component<_UniFormsItemProps>;
type _UniFormsItemInstance = InstanceType<_UniFormsItem>;

declare global {
    namespace UniHelper {
        /** 校验规则 */
        interface UniFormsItemRulesRule extends _UniFormsItemRulesRule {
        }
        /** 校验规则 */
        type UniFormsItemRules = _UniFormsItemRules;
        /** label 对齐方式 */
        type UniFormsItemLabelAlign = _UniFormsItemLabelAlign;
        /** 动态设置表单规则 */
        interface UniFormsItemSetRules extends _UniFormsItemSetRules {
        }
        /** 校验子表单 */
        interface UniFormsItemOnFieldChange extends _UniFormsItemOnFieldChange {
        }
        type UniFormsItemProps = _UniFormsItemProps;
        type UniFormsItem = _UniFormsItem;
        type UniFormsItemInstance = _UniFormsItemInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniFormsItem: _UniFormsItem;
    }
}

/** 选项 */
interface _UniGoodsNavOption {
    /** 文字 */
    text: string;
    /** 图标 */
    icon: _UniIconsType;
    /** 右上角数字角标 */
    info?: number;
    /**
     * 角标背景色
     *
     * 默认为 #ff0000
     */
    infoBackgroundColor?: string;
    /**
     * 角标前景色
     *
     * 默认为 #fff
     */
    infoColor?: string;
}
interface _UniGoodsNavOnClickEvent {
    index: number;
    content: _UniGoodsNavOption;
}
/** 左侧点击触发 */
interface _UniGoodsNavOnClick {
    (event: _UniGoodsNavOnClickEvent): void;
}
/** 按钮 */
interface _UniGoodsNavButton {
    /** 文字 */
    text: string;
    /** 按钮背景色 */
    backgroundColor: string;
    /** 字体颜色 */
    color: string;
}
interface _UniGoodsNavOnButtonClickEvent {
    index: number;
    content: _UniGoodsNavButton;
}
/** 右侧点击触发 */
interface _UniGoodsNavOnButtonClick {
    (event: _UniGoodsNavOnButtonClickEvent): void;
}
type _UniGoodsNavProps = Partial<{
    /**
     * 选项
     *
     * 默认为 [{ icon: 'shop', text: '店铺' }, { icon: 'cart', text: '购物车' }]
     */
    options: _UniGoodsNavOption[];
    /**
     * 组件按钮组
     *
     * 默认为 [{ text: '加入购物车', backgroundColor: 'linear-gradient(90deg, #ffcd1e, #ff8a18)', color:
     * '#fff' }, { text: '立即购买', backgroundColor: 'linear-gradient(90deg, #fe6035, #ef1224)', color:
     * '#fff' }]
     */
    buttonGroup: _UniGoodsNavButton[];
    /**
     * 按钮是否平铺
     *
     * 默认为 false
     */
    fill: boolean;
    /** 左侧点击触发 */
    onClick: _UniGoodsNavOnClick;
    /** 右侧点击触发 */
    onButtonClick: _UniGoodsNavOnButtonClick;
}>;
/** 商品加入购物车，立即购买 */
type _UniGoodsNav = Component<_UniGoodsNavProps>;
type _UniGoodsNavInstance = InstanceType<_UniGoodsNav>;

declare global {
    namespace UniHelper {
        /** 选项 */
        interface UniGoodsNavOption extends _UniGoodsNavOption {
        }
        type UniGoodsNavOnClickEvent = _UniGoodsNavOnClickEvent;
        /** 左侧点击触发 */
        interface UniGoodsNavOnClick extends _UniGoodsNavOnClick {
        }
        /** 按钮 */
        interface UniGoodsNavButton extends _UniGoodsNavButton {
        }
        type UniGoodsNavOnButtonClickEvent = _UniGoodsNavOnButtonClickEvent;
        /** 右侧点击触发 */
        interface UniGoodsNavOnButtonClick extends _UniGoodsNavOnButtonClick {
        }
        type UniGoodsNavProps = _UniGoodsNavProps;
        /** 商品加入购物车，立即购买 */
        type UniGoodsNav = _UniGoodsNav;
        type UniGoodsNavInstance = _UniGoodsNavInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 商品加入购物车，立即购买 */
        UniGoodsNav: _UniGoodsNav;
    }
}

interface _UniGridOnChangeDetail {
    index: number;
}
interface _UniGridOnChangeEvent {
    detail: _UniGridOnChangeDetail;
}
/** 点击触发 */
interface _UniGridOnChange {
    (event: _UniGridOnChangeEvent): void;
}
/** 宫格属性 */
type _UniGridProps = Partial<{
    /**
     * 每列显示个数
     *
     * 默认为 3
     */
    column: number;
    /**
     * 边框颜色
     *
     * 默认为 #d2d2d2
     */
    borderColor: string;
    /**
     * 是否显示边框
     *
     * 默认为 true
     */
    showBorder: boolean;
    /**
     * 是否方形显示
     *
     * 默认为 true
     */
    square: boolean;
    /**
     * 点击背景是否高亮
     *
     * 默认为 true
     */
    highlight: boolean;
    /** 点击触发 */
    onChange: _UniGridOnChange;
}>;
/** 宫格 */
type _UniGrid = Component<_UniGridProps>;
/** 宫格属性 */
type _UniGridInstance = InstanceType<_UniGrid>;

declare global {
    namespace UniHelper {
        interface UniGridOnChangeDetail extends _UniGridOnChangeDetail {
        }
        type UniGridOnChangeEvent = _UniGridOnChangeEvent;
        /** 点击触发 */
        interface UniGridOnChange extends _UniGridOnChange {
        }
        /** 宫格属性 */
        type UniGridProps = _UniGridProps;
        /** 宫格 */
        type UniGrid = _UniGrid;
        /** 宫格实例 */
        type UniGridInstance = _UniGridInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 宫格 */
        UniGrid: _UniGrid;
    }
}

/** 宫格项属性 */
type _UniGridItemProps = Partial<{
    /** 子组件唯一标识 */
    index: number;
}>;
/** 宫格项 */
type _UniGridItem = Component<_UniGridItemProps>;
/** 宫格项实例 */
type _UniGridItemInstance = InstanceType<_UniGridItem>;

declare global {
    namespace UniHelper {
        /** 宫格项属性 */
        type UniGridItemProps = _UniGridItemProps;
        /** 宫格项 */
        type UniGridItem = _UniGridItem;
        /** 宫格项实例 */
        type UniGridItemInstance = _UniGridItemInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 宫格项 */
        UniGridItem: _UniGridItem;
    }
}

/**
 * 模式
 *
 * default 默认
 *
 * card 卡片
 */
type _UniGroupMode = 'default' | 'card';
/** 点击时触发 */
interface _UniGroupOnClick {
    (): void;
}
/** 分组属性 */
type _UniGroupProps = Partial<{
    /** 主标题 */
    title: string;
    /**
     * 分组间隔
     *
     * 单位为 px
     *
     * 默认为 10
     */
    top: number | string;
    /**
     * 模式
     *
     * default 默认
     *
     * card 卡片
     *
     * 默认为 default
     */
    mode: _UniGroupMode;
    /**
     * 是否开启统计
     *
     * 默认为 false
     */
    stat: boolean;
    /** 点击时触发 */
    onClick: _UniGroupOnClick;
}>;
/** 分组组件可用于将组件分组，添加间隔，以产生明显的区块 */
type _UniGroup = Component<_UniGroupProps>;
/** 分组组件实例 */
type _UniGroupInstance = InstanceType<_UniGroup>;

declare global {
    namespace UniHelper {
        /**
         * 模式
         *
         * default 默认
         *
         * card 卡片
         */
        type UniGroupMode = _UniGroupMode;
        interface UniGroupOnClick extends _UniGroupOnClick {
        }
        /** 分组属性 */
        type UniGroupProps = _UniGroupProps;
        /** 分组组件可用于将组件分组，添加间隔，以产生明显的区块 */
        type UniGroup = _UniGroup;
        /** 分组组件实例 */
        type UniGroupInstance = _UniGroupInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 分组组件可用于将组件分组，添加间隔，以产生明显的区块 */
        UniGroup: _UniGroup;
    }
}

/** 数据对象 */
interface _UniIndexedListOption {
    /** 索引标题 */
    letter: string;
    /** 索引 */
    data: string[];
}
interface _UniIndexedListOnClickEvent {
    item: _UniIndexedListOption;
    select: _UniIndexedListOption[];
}
/** 点击触发 */
interface _UniIndexedListOnClick {
    (event: _UniIndexedListOnClickEvent): void;
}
/** 索引列表属性 */
type _UniIndexedListProps = Partial<{
    /** 索引列表需要的数据对象 */
    options: _UniIndexedListOption[];
    /**
     * 展示模式
     *
     * true 展示默认
     *
     * false 展示选择
     *
     * 默认为 false
     */
    showSelect: boolean;
    /** 点击触发 */
    onClick: _UniIndexedListOnClick;
}>;
/** 索引列表 */
type _UniIndexedList = Component<_UniIndexedListProps>;
/** 索引列表实例 */
type _UniIndexedListInstance = InstanceType<_UniIndexedList>;

declare global {
    namespace UniHelper {
        /** 数据对象 */
        interface UniIndexedListOption extends _UniIndexedListOption {
        }
        type UniIndexedListOnClickEvent = _UniIndexedListOnClickEvent;
        /** 点击触发 */
        interface UniIndexedListOnClick extends _UniIndexedListOnClick {
        }
        /** 索引列表属性 */
        type UniIndexedListProps = _UniIndexedListProps;
        /** 索引列表 */
        type UniIndexedList = _UniIndexedList;
        /** 索引列表实例 */
        type UniIndexedListInstance = _UniIndexedListInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 索引列表 */
        UniIndexedList: _UniIndexedList;
    }
}

/** 外部网页超链接组件属性 */
type _UniLinkProps = Partial<{
    /** 链接地址 */
    href: string;
    /** 显示文字 */
    text: string;
    /** H5 下载文件名 */
    download: string;
    /**
     * 是否显示下划线
     *
     * 默认为 true
     */
    showUnderLine: boolean;
    /**
     * 小程序端复制链接时的提示语
     *
     * 默认为 已自动复制网址，请在手机浏览器里粘贴该网址
     */
    copyTips: string;
    /**
     * 链接文字颜色
     *
     * 默认为 #999999
     */
    color: string;
    /**
     * 链接文字大小
     *
     * 单位为 px
     *
     * 默认为 14
     */
    fontSize: number | string;
}>;
/**
 * 外部网页超链接组件
 *
 * 在小程序内复制 URL
 *
 * 在 APP 内打开外部浏览器
 *
 * 在 H5 端打开新网页
 */
type _UniLink = Component<_UniLinkProps>;
/** 外部网页超链接组件实例 */
type _UniLinkInstance = InstanceType<_UniLink>;

declare global {
    namespace UniHelper {
        /** 外部网页超链接组件属性 */
        type UniLinkProps = _UniLinkProps;
        /**
         * 外部网页超链接组件
         *
         * 在小程序内复制 URL
         *
         * 在 APP 内打开外部浏览器
         *
         * 在 H5 端打开新网页
         */
        type UniLink = _UniLink;
        /** 外部网页超链接组件 */
        type UniLinkInstance = _UniLinkInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /**
         * 外部网页超链接组件
         *
         * 在小程序内复制 URL
         *
         * 在 APP 内打开外部浏览器
         *
         * 在 H5 端打开新网页
         */
        UniLink: _UniLink;
    }
}

/** 列表属性 */
type _UniListProps = Partial<{
    /**
     * 是否显示边框
     *
     * 默认为 true
     */
    border: boolean;
}>;
/**
 * 列表
 *
 * 包含基本列表样式、可扩展插槽机制、长列表性能优化、多端兼容
 *
 * 在 vue 页面默认使用页面级滚动，在 app-nvue 页面默认使用原生 list 组件滚动
 *
 * uni-list 是父容器，核心是 uni-list-item 子组件，它代表列表中的一个可重复行，子组件可以无限循环
 *
 * uni-list-item 有很多风格，uni-list-item 组件通过内置的属性，满足一些常用的场景，也可以通过扩展插槽来自定义列表内容
 *
 * 内置属性可以覆盖的场景包括：导航列表、设置列表、小图标列表、通信录列表、聊天记录列表
 *
 * 涉及很多大图或丰富内容的列表，比如类今日头条的新闻列表、类淘宝的电商列表，需要通过扩展插槽实现
 */
type _UniList = Component<_UniListProps>;
/** 列表实例 */
type _UniListInstance = InstanceType<_UniList>;

declare global {
    namespace UniHelper {
        /** 列表属性 */
        type UniListProps = _UniListProps;
        /**
         * 列表
         *
         * 包含基本列表样式、可扩展插槽机制、长列表性能优化、多端兼容
         *
         * 在 vue 页面默认使用页面级滚动，在 app-nvue 页面默认使用原生 list 组件滚动
         *
         * uni-list 是父容器，核心是 uni-list-item 子组件，它代表列表中的一个可重复行，子组件可以无限循环
         *
         * uni-list-item 有很多风格，uni-list-item 组件通过内置的属性，满足一些常用的场景，也可以通过扩展插槽来自定义列表内容
         *
         * 内置属性可以覆盖的场景包括：导航列表、设置列表、小图标列表、通信录列表、聊天记录列表
         *
         * 涉及很多大图或丰富内容的列表，比如类今日头条的新闻列表、类淘宝的电商列表，需要通过扩展插槽实现
         */
        type UniList = _UniList;
        /** 列表实例 */
        type UniListInstance = _UniListInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /**
         * 列表
         *
         * 包含基本列表样式、可扩展插槽机制、长列表性能优化、多端兼容
         *
         * 在 vue 页面默认使用页面级滚动，在 app-nvue 页面默认使用原生 list 组件滚动
         *
         * uni-list 是父容器，核心是 uni-list-item 子组件，它代表列表中的一个可重复行，子组件可以无限循环
         *
         * uni-list-item 有很多风格，uni-list-item 组件通过内置的属性，满足一些常用的场景，也可以通过扩展插槽来自定义列表内容
         *
         * 内置属性可以覆盖的场景包括：导航列表、设置列表、小图标列表、通信录列表、聊天记录列表
         *
         * 涉及很多大图或丰富内容的列表，比如类今日头条的新闻列表、类淘宝的电商列表，需要通过扩展插槽实现
         */
        UniList: _UniList;
    }
}

type _UniListAdProps = Partial<{
    /** 标题 */
    title: string;
}>;
type _UniListAd = Component<_UniListAdProps>;
type _UniListAdInstance = InstanceType<_UniListAd>;

declare global {
    namespace UniHelper {
        type UniListAdProps = _UniListAdProps;
        type UniListAd = _UniListAd;
        type UniListAdInstance = _UniListAdInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniListAd: _UniListAd;
    }
}

type _UniListChatLink = 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab';
/** 角标位置 */
type _UniListChatBadgePositon = 'left' | 'right';
interface _UniListChatOnClickEvent {
    data: AnyRecord;
}
/** 点击时触发 */
interface _UniListChatOnClick {
    (event: _UniListChatOnClickEvent): void;
}
/** 聊天列表属性 */
type _UniListChatProps = Partial<{
    /** 标题 */
    title: string;
    /** 描述 */
    note: string;
    /**
     * 是否开启点击反馈
     *
     * 默认为 false
     */
    clickable: boolean;
    /**
     * 是否展示右侧箭头并开启点击反馈
     *
     * 默认为 false，表示不开启
     */
    link: false | _UniListChatLink;
    /**
     * 跳转页面地址
     *
     * 如果填写此属性，click 会返回页面是否跳转成功
     */
    to: string;
    /** 数字角标内容，设置为 dot 将显示圆点 */
    badgeText: string;
    /**
     * 角标位置
     *
     * 默认为 right
     */
    badgePositon: _UniListChatBadgePositon;
    /** 右侧显示的时间 */
    time: string;
    /**
     * 是否显示圆形头像
     *
     * 默认为 false
     */
    avatarCircle: boolean;
    /** 头像地址 */
    avatar: string;
    /** 头像组 */
    avatarList: Array<{
        url: string;
    }>;
    /** 点击时触发 */
    onClick: _UniListChatOnClick;
}>;
/** 聊天列表 */
type _UniListChat = Component<_UniListChatProps>;
/** 聊天列表实例 */
type _UniListChatInstance = InstanceType<_UniListChat>;

declare global {
    namespace UniHelper {
        type UniListChatLink = _UniListChatLink;
        /** 角标位置 */
        type UniListChatBadgePositon = _UniListChatBadgePositon;
        type UniListChatOnClickEvent = _UniListChatOnClickEvent;
        /** 点击时触发 */
        interface UniListChatOnClick extends _UniListChatOnClick {
        }
        /** 聊天列表属性 */
        type UniListChatProps = _UniListChatProps;
        /** 聊天列表 */
        type UniListChat = _UniListChat;
        /** 聊天列表实例 */
        type UniListChatInstance = _UniListChatInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 聊天列表 */
        UniListChat: _UniListChat;
    }
}

/**
 * title 是否溢出隐藏
 *
 * 0 默认
 *
 * 1 显示一行
 *
 * 2 显示两行
 */
type _UniListItemEllipsis = 0 | 1 | 2;
/**
 * 缩略图尺寸
 *
 * lg 大图
 *
 * base 一般
 *
 * sm 小图
 */
type _UniListItemThumbSize = 'lg' | 'base' | 'sm';
/** 新页面的跳转方式 */
type _UniListItemLink = 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab';
/**
 * 排版方向
 *
 * row 横向
 *
 * column 纵向
 */
type _UniListItemDirection = 'row' | 'column';
/** switch 是否被选中 */
type _UniListItemSwitchChecked = boolean;
/** 扩展图标参数 */
type _UniListItemExtraIcon = Omit<_UniIconsProps, 'customPrefix'>;
interface _UniListItemOnClickEvent {
    data: AnyRecord;
}
/** 点击 uni-list-item 触发，需开启点击反馈 */
interface _UniListItemOnClick {
    (event: _UniListItemOnClickEvent): void;
}
interface _UniListItemOnSwitchChangeEvent {
    /** switch 是否被选中 */
    value: _UniListItemSwitchChecked;
}
/** 点击切换 switch 时触发，需显示 switch */
interface _UniListItemOnSwitchChange {
    (event: _UniListItemOnSwitchChangeEvent): void;
}
type _UniListItemProps = Partial<{
    /** 标题 */
    title: string;
    /** 描述 */
    note: string;
    /**
     * title 是否溢出隐藏
     *
     * 0 默认
     *
     * 1 显示一行
     *
     * 2 显示两行
     *
     * 默认为 0
     */
    ellipsis: _UniListItemEllipsis;
    /**
     * 左侧缩略图
     *
     * 如果设置了，扩展图标就不会显示
     */
    thumb: string;
    /**
     * 缩略图尺寸
     *
     * lg 大图
     *
     * base 一般
     *
     * sm 小图
     *
     * 默认为 base
     */
    thumbSize: _UniListItemThumbSize;
    /**
     * 是否显示数字角标
     *
     * 默认为 false
     */
    showBadge: boolean;
    /** 数字角标内容 */
    badgeText: string;
    /**
     * 数字角标类型
     *
     * 默认为 success
     */
    badgeType: _UniBadgeType;
    /** 数字角标样式 */
    badgeStyle: _UniBadgeCustomStyle;
    /** 右侧文字内容 */
    rightText: string;
    /**
     * 是否禁用
     *
     * 默认为 false
     */
    disabled: boolean;
    /**
     * 是否显示箭头图标
     *
     * 默认为 false
     */
    showArrow: boolean;
    /**
     * 是否展示右侧箭头并开启点击反馈
     *
     * 默认为 false，表示不开启
     */
    link: false | _UniListItemLink;
    /**
     * 新页面跳转地址
     *
     * 如填写此属性，click 会返回页面是否跳转成功
     */
    to: string;
    /**
     * 是否开启点击反馈
     *
     * 默认为 false
     */
    clickable: boolean;
    /**
     * 是否显示 switch
     *
     * 默认为 false
     */
    showSwitch: boolean;
    /**
     * switch 是否被选中
     *
     * 默认为 false
     */
    switchChecked: _UniListItemSwitchChecked;
    /**
     * 左侧是否显示扩展图标
     *
     * 默认为 false
     */
    showExtraIcon: boolean;
    /** 扩展图标参数 */
    extraIcon: _UniListItemExtraIcon;
    /**
     * 排版方向
     *
     * row 横向
     *
     * column 纵向
     *
     * 默认为 row
     */
    direction: _UniListItemDirection;
    /**
     * 是否显示边框
     *
     * 默认为 true
     */
    border: boolean;
    /**
     * 自定义样式
     *
     * 默认为 { padding: '', backgroundColor: '#FFFFFF' }
     */
    customStyle: AnyRecord;
    /** 点击 uni-list-item 触发，需开启点击反馈 */
    onClick: _UniListItemOnClick;
    /** 点击切换 switch 时触发，需显示 switch */
    onSwitchChange: _UniListItemOnSwitchChange;
}>;
type _UniListItem = Component<_UniListItemProps>;
type _UniListItemInstance = InstanceType<_UniListItem>;

declare global {
    namespace UniHelper {
        /**
         * title 是否溢出隐藏
         *
         * 0 默认
         *
         * 1 显示一行
         *
         * 2 显示两行
         */
        type UniListItemEllipsis = _UniListItemEllipsis;
        /**
         * 缩略图尺寸
         *
         * lg 大图
         *
         * base 一般
         *
         * sm 小图
         */
        type UniListItemThumbSize = _UniListItemThumbSize;
        /** 新页面的跳转方式 */
        type UniListItemLink = _UniListItemLink;
        /**
         * 排版方向
         *
         * row 横向
         *
         * column 纵向
         */
        type UniListItemDirection = _UniListItemDirection;
        /** switch 是否被选中 */
        type UniListItemSwitchChecked = _UniListItemSwitchChecked;
        /** 扩展图标参数 */
        interface UniListItemExtraIcon extends _UniListItemExtraIcon {
        }
        type UniListItemOnClickEvent = _UniListItemOnClickEvent;
        /** 点击 uni-list-item 触发，需开启点击反馈 */
        interface UniListItemOnClick extends _UniListItemOnClick {
        }
        type UniListItemOnSwitchChangeEvent = _UniListItemOnSwitchChangeEvent;
        /** 点击切换 switch 时触发，需显示 switch */
        interface UniListItemOnSwitchChange extends _UniListItemOnSwitchChange {
        }
        type UniListItemProps = _UniListItemProps;
        type UniListItem = _UniListItem;
        type UniListItemInstance = _UniListItemInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniListItem: _UniListItem;
    }
}

/**
 * loading 的状态
 *
 * more 加载前
 *
 * loading 加载中
 *
 * noMore 没有更多数据
 */
type _UniLoadMoreStatus = 'more' | 'loading' | 'noMore';
/**
 * 图标样式
 *
 * snow iOS 雪花加载样式
 *
 * circle Android 环形加载样式
 *
 * auto 根据平台自动选择加载样式
 */
type _UniLoadMoreIconType = 'auto' | 'snow' | 'circle';
/** 各状态文字说明 */
interface _UniLoadMoreContentText {
    /** 默认为 上拉显示更多 */
    contentdown: string;
    /** 默认为 正在加载 */
    contentrefresh: string;
    /** 默认为 没有更多数据了 */
    contentnomore: string;
}
interface _UniLoadMoreOnClickLoadMoreDetail {
    /**
     * loading 的状态
     *
     * more 加载前
     *
     * loading 加载中
     *
     * noMore 没有更多数据
     */
    status: _UniLoadMoreStatus;
}
interface _UniLoadMoreOnClickLoadMoreEvent {
    detail: _UniLoadMoreOnClickLoadMoreDetail;
}
/** 点击加载更多时触发 */
interface _UniLoadMoreOnClickLoadMore {
    (event: _UniLoadMoreOnClickLoadMoreEvent): void;
}
type _UniLoadMoreProps = Partial<{
    /**
     * 图标大小
     *
     * 单位为 px
     *
     * 默认为 24
     */
    iconSize: number;
    /**
     * loading 的状态
     *
     * more 加载前
     *
     * loading 加载中
     *
     * noMore 没有更多数据
     *
     * 默认为 more
     */
    status: _UniLoadMoreStatus;
    /**
     * 是否显示 loading 图标
     *
     * 默认为 true
     */
    showIcon: boolean;
    /**
     * 是否显示文本
     *
     * 默认为 true
     */
    showText: boolean;
    /**
     * 图标样式
     *
     * snow iOS 雪花加载样式
     *
     * circle Android 环形加载样式
     *
     * auto 根据平台自动选择加载样式
     *
     * 默认为 auto
     */
    iconType: _UniLoadMoreIconType;
    /**
     * 图标和文字颜色
     *
     * 默认为 #777777
     */
    color: string;
    /** 各状态文字说明 */
    contentText: _UniLoadMoreContentText;
    /** 点击加载更多时触发 */
    onClickLoadMore: _UniLoadMoreOnClickLoadMore;
}>;
/** 用于列表中，做滚动加载使用，展示 loading 的各种状态 */
type _UniLoadMore = Component<_UniLoadMoreProps>;
type _UniLoadMoreInstance = InstanceType<_UniLoadMore>;

declare global {
    namespace UniHelper {
        /**
         * loading 的状态
         *
         * more 加载前
         *
         * loading 加载中
         *
         * noMore 没有更多数据
         */
        type UniLoadMoreStatus = _UniLoadMoreStatus;
        /**
         * 图标样式
         *
         * snow iOS 雪花加载样式
         *
         * circle Android 环形加载样式
         *
         * auto 根据平台自动选择加载样式
         */
        type UniLoadMoreIconType = _UniLoadMoreIconType;
        /** 各状态文字说明 */
        interface UniLoadMoreContentText extends _UniLoadMoreContentText {
        }
        interface UniLoadMoreOnClickLoadMoreDetail extends _UniLoadMoreOnClickLoadMoreDetail {
        }
        type UniLoadMoreOnClickLoadMoreEvent = _UniLoadMoreOnClickLoadMoreEvent;
        /** 点击加载更多时触发 */
        interface UniLoadMoreOnClickLoadMore extends _UniLoadMoreOnClickLoadMore {
        }
        type UniLoadMoreProps = _UniLoadMoreProps;
        /** 用于列表中，做滚动加载使用，展示 loading 的各种状态 */
        type UniLoadMore = _UniLoadMore;
        type UniLoadMoreInstance = _UniLoadMoreInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 用于列表中，做滚动加载使用，展示 loading 的各种状态 */
        UniLoadMore: _UniLoadMore;
    }
}

/** 导航栏属性 */
type _UniNavBarProps = Partial<{
    /** 标题文字 */
    title: string;
    /** 左侧按钮文本 */
    leftText: string;
    /** 右侧按钮文本 */
    rightText: string;
    /** 左侧按钮图标 */
    leftIcon: _UniIconsType;
    /** 右侧按钮图标 */
    rightIcon: _UniIconsType;
    /**
     * 图标和文字颜色
     *
     * 默认为 #000000
     */
    color: string;
    /**
     * 导航栏背景颜色
     *
     * 默认为 #ffffff
     */
    backgroundColor: string;
    /**
     * 是否固定顶部
     *
     * 默认为 false
     */
    fixed: boolean;
    /**
     * 是否包含状态栏
     *
     * 默认为 false
     */
    statusBar: boolean;
    /**
     * 导航栏下是否有阴影
     *
     * 默认为 false
     */
    shadow: boolean;
    /**
     * 导航栏下是否有边框
     *
     * 默认为 true
     */
    border: boolean;
    /**
     * 导航栏高度
     *
     * 如果传入 number 默认使用 px
     *
     * 默认为 44
     */
    height: number | string;
    /**
     * 导航栏是否开启暗黑模式
     *
     * 默认为 false
     */
    dark: boolean;
    /**
     * 导航栏左侧插槽宽度
     *
     * 如果传入 number 默认使用 px
     *
     * 默认为 60
     */
    leftWidth: number | string;
    /**
     * 导航栏右侧插槽宽度
     *
     * 如果传入 number 默认使用 px
     *
     * 默认为 60
     */
    rightWidth: number | string;
    /**
     * 是否开启统计标题功能
     *
     * 默认为 false
     */
    stat: boolean;
}>;
/** 导航栏组件，主要用于头部导航 */
type _UniNavBar = Component<_UniNavBarProps>;
/** 导航栏组件实例 */
type _UniNavBarInstance = InstanceType<_UniNavBar>;

declare global {
    namespace UniHelper {
        /** 导航栏属性 */
        type UniNavBarProps = _UniNavBarProps;
        /** 导航栏组件，主要用于头部导航 */
        type UniNavBar = _UniNavBar;
        /** 导航栏组件实例 */
        type UniNavBarInstance = _UniNavBarInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 导航栏组件，主要用于头部导航 */
        UniNavBar: _UniNavBar;
    }
}

/** 点击触发 */
interface _UniNoticeBarOnClick {
    (): void;
}
/** 关闭触发 */
interface _UniNoticeBarOnClose {
    (): void;
}
/** 查看更多触发 */
interface _UniNoticeBarOnGetmore {
    (): void;
}
/** 通告栏属性 */
type _UniNoticeBarProps = Partial<{
    /**
     * 文字滚动的速度
     *
     * 单位为 px
     *
     * 默认为 100
     */
    speed: number;
    /** 显示文字 */
    text: string;
    /** 查看更多的文本 */
    moreText: string;
    /**
     * 背景颜色
     *
     * 默认为 #fff9ea
     */
    backgroundColor: string;
    /**
     * 文字颜色
     *
     * 默认为 #ff9a43
     */
    color: string;
    /**
     * 查看更多的文字颜色
     *
     * 默认为 #ff9a43
     */
    moreColor: string;
    /**
     * 字体大小，也用于计算 line-height
     *
     * 单位为 px
     *
     * 默认为 14
     */
    fontSize: number;
    /**
     * 是否单行
     *
     * 默认为 false
     */
    single: boolean;
    /**
     * 是否滚动
     *
     * true 滚动，强制单行
     *
     * false 不滚动
     *
     * 默认为 false
     */
    scrollable: boolean;
    /**
     * 是否显示左侧喇叭图标
     *
     * 默认为 false
     */
    showIcon: boolean;
    /**
     * 是否显示左侧关闭按钮
     *
     * 默认为 false
     */
    showClose: boolean;
    /**
     * 是否显示右侧查看更多图标
     *
     * 默认为 false
     */
    showGetMore: boolean;
    /** 点击触发 */
    onClick: _UniNoticeBarOnClick;
    /** 关闭触发 */
    onClose: _UniNoticeBarOnClose;
    /** 查看更多触发 */
    onGetmore: _UniNoticeBarOnGetmore;
}>;
/** 通告栏 */
type _UniNoticeBar = Component<_UniNoticeBarProps>;
/** 通告栏实例 */
type _UniNoticeBarInstance = InstanceType<_UniNoticeBar>;

declare global {
    namespace UniHelper {
        /** 点击触发 */
        interface UniNoticeBarOnClick extends _UniNoticeBarOnClick {
        }
        /** 关闭触发 */
        interface UniNoticeBarOnClose extends _UniNoticeBarOnClose {
        }
        /** 查看更多触发 */
        interface UniNoticeBarOnGetmore extends _UniNoticeBarOnGetmore {
        }
        /** 通告栏属性 */
        type UniNoticeBarProps = _UniNoticeBarProps;
        /** 通告栏 */
        type UniNoticeBar = _UniNoticeBar;
        /** 通告栏实例 */
        type UniNoticeBarInstance = _UniNoticeBarInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 通告栏 */
        UniNoticeBar: _UniNoticeBar;
    }
}

/** 值 */
type _UniNumberBoxValue = number;
/** 值改变时触发 */
interface _UniNumberBoxOnChange {
    (value: _UniNumberBoxValue): void;
}
/** 值改变时触发 */
interface _UniNumberBoxOnInput {
    (value: _UniNumberBoxValue): void;
}
type _UniNumberBoxOnFocusEvent = InputOnFocusEvent;
/** 聚焦时触发 */
interface _UniNumberBoxOnFocus {
    (event: _UniNumberBoxOnFocusEvent): void;
}
type _UniNumberBoxOnBlurEvent = InputOnBlurEvent;
/** 失焦时触发 */
interface _UniNumberBoxOnBlur {
    (event: _UniNumberBoxOnBlurEvent): void;
}
/** 数字输入框属性 */
type _UniNumberBoxProps = Partial<{
    /**
     * 输入框当前值
     *
     * 默认为 0
     */
    value: _UniNumberBoxValue;
    /**
     * 最小值
     *
     * 默认为 0
     */
    min: number;
    /**
     * 最大值
     *
     * 默认为 100
     */
    max: number;
    /**
     * 每次点击改变的间隔大小
     *
     * 默认为 1
     */
    step: number;
    /**
     * 背景色
     *
     * 默认为 #f5f5f5
     */
    background: string;
    /**
     * 文本颜色
     *
     * 默认为 #333
     */
    color: string;
    /**
     * 是否为禁用状态
     *
     * 默认为 false
     */
    disabled: boolean;
    /** 值改变时触发 */
    onChange: _UniNumberBoxOnChange;
    /** 值改变时触发 */
    onInput: _UniNumberBoxOnInput;
    /** 聚焦时触发 */
    onFocus: _UniNumberBoxOnFocus;
    /** 失焦时触发 */
    onBlur: _UniNumberBoxOnBlur;
}>;
/** 带加减按钮的数字输入框 */
type _UniNumberBox = Component<_UniNumberBoxProps>;
/** 带加减按钮的数字输入框实例 */
type _UniNumberBoxInstance = InstanceType<_UniNumberBox>;

declare global {
    namespace UniHelper {
        /** 值 */
        type UniNumberBoxValue = _UniNumberBoxValue;
        /** 值改变时触发 */
        interface UniNumberBoxOnChange extends _UniNumberBoxOnChange {
        }
        /** 值改变时触发 */
        interface UniNumberBoxOnInput extends _UniNumberBoxOnInput {
        }
        type UniNumberBoxOnFocusEvent = _UniNumberBoxOnFocusEvent;
        /** 聚焦时触发 */
        interface UniNumberBoxOnFocus extends _UniNumberBoxOnFocus {
        }
        type UniNumberBoxOnBlurEvent = _UniNumberBoxOnBlurEvent;
        /** 失焦时触发 */
        interface UniNumberBoxOnBlur extends _UniNumberBoxOnBlur {
        }
        /** 数字输入框属性 */
        type UniNumberBoxProps = _UniNumberBoxProps;
        /** 带加减按钮的数字输入框 */
        type UniNumberBox = _UniNumberBox;
        /** 带加减按钮的数字输入框实例 */
        type UniNumberBoxInstance = _UniNumberBoxInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 带加减按钮的数字输入框 */
        UniNumberBox: _UniNumberBox;
    }
}

/** 点击页码按钮时触发 */
interface _UniPaginationOnInput {
    (current: number): void;
}
type _UniPaginationOnChangeType = 'prev' | 'next';
interface _UniPaginationOnChangeEvent {
    type: _UniPaginationOnChangeType;
    current: number;
}
/** 点击页码按钮时触发 */
interface _UniPaginationOnChange {
    (event: _UniPaginationOnChangeEvent): void;
}
/** 分页器属性 */
type _UniPaginationProps = Partial<{
    /**
     * 左侧按钮文字
     *
     * 默认为 上一页
     */
    prevText: string;
    /**
     * 右侧按钮文字
     *
     * 默认为 下一页
     */
    nextText: string;
    /**
     * 每页条目文字
     *
     * 默认为 条/页
     */
    piecePerPageText: string;
    /**
     * 当前页，优先级比 current 低
     *
     * 默认为 1
     */
    value: number;
    /**
     * 当前页，优先级比 value 高
     *
     * 默认为 1
     */
    current: number;
    /**
     * 数据总量
     *
     * 默认为 0
     */
    total: number;
    /**
     * 每页数据量
     *
     * 默认为 10
     */
    pageSize: number;
    /**
     * 是否以 icon 展示按钮
     *
     * 默认为 false
     */
    showIcon: boolean;
    /**
     * 是否展示每页条目数
     *
     * 默认为 false
     */
    showPageSize: boolean;
    /**
     * 可选的每页条目数
     *
     * 默认为 [20, 50, 100, 500]
     */
    pageSizeRange: number[];
    /**
     * 最大页数
     *
     * 默认为 7
     */
    pagerCount: number;
    /** 点击页码按钮时触发 */
    onInput: _UniPaginationOnInput;
    /** 点击页码按钮时触发 */
    onChange: _UniPaginationOnChange;
}>;
/** 分页器组件，用于展示页码、请求数据等 */
type _UniPagination = Component<_UniPaginationProps>;
/** 分页器组件实例 */
type _UniPaginationInstance = InstanceType<_UniPagination>;

declare global {
    namespace UniHelper {
        /** 点击页码按钮时触发 */
        interface UniPaginationOnInput extends _UniPaginationOnInput {
        }
        type UniPaginationOnChangeType = _UniPaginationOnChangeType;
        type UniPaginationOnChangeEvent = _UniPaginationOnChangeEvent;
        /** 点击页码按钮时触发 */
        interface UniPaginationOnChange extends _UniPaginationOnChange {
        }
        /** 分页器属性 */
        type UniPaginationProps = _UniPaginationProps;
        /** 分页器组件，用于展示页码、请求数据等 */
        type UniPagination = _UniPagination;
        /** 分页器组件实例 */
        type UniPaginationInstance = _UniPaginationInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 分页器组件，用于展示页码、请求数据等 */
        UniPagination: _UniPagination;
    }
}

/**
 * 弹出方式
 *
 * top 顶部弹出
 *
 * center 居中弹出
 *
 * bottom 底部弹出
 *
 * left 左侧弹出
 *
 * right 右侧弹出
 *
 * message 预置样式，消息提示
 *
 * dialog 预置样式，对话框
 *
 * share 预置样式，底部弹出分享
 */
type _UniPopupType = 'top' | 'center' | 'bottom' | 'left' | 'right' | 'message' | 'dialog' | 'share';
interface _UniPopupOnChangeEvent {
    show: boolean;
    type: _UniPopupType;
}
/** 状态变化时触发 */
interface _UniPopupOnChange {
    (event: _UniPopupOnChangeEvent): void;
}
/** 点击遮罩层触发 */
interface _UniPopupOnMaskClick {
    (): void;
}
/** 弹出层属性 */
type _UniPopupProps = Partial<{
    /**
     * 是否开启动画
     *
     * 默认为 true
     */
    animation: boolean;
    /**
     * 弹出方式
     *
     * top 顶部弹出
     *
     * center 居中弹出
     *
     * bottom 底部弹出
     *
     * left 左侧弹出
     *
     * right 右侧弹出
     *
     * message 预置样式，消息提示
     *
     * dialog 预置样式，对话框
     *
     * share 预置样式，底部弹出分享
     *
     * 默认为 center
     */
    type: _UniPopupType;
    /**
     * 蒙版点击是否关闭弹窗
     *
     * 默认为 true
     */
    isMaskClick: boolean;
    /**
     * 蒙版颜色
     *
     * 默认为 rgba(0, 0, 0, 0.4)
     */
    maskBackgroundColor: string;
    /**
     * 主窗口背景色
     *
     * 默认为 none
     */
    backgroundColor: string;
    /**
     * 是否适配底部安全区
     *
     * 默认为 true
     */
    safeArea: boolean;
    /** 打开弹出层 */
    open: (type?: _UniPopupType) => void;
    /** 关闭弹出层 */
    close: () => void;
    /** 状态变化时触发 */
    onChange: _UniPopupOnChange;
    /** 点击遮罩层触发 */
    onMaskClick: _UniPopupOnMaskClick;
}>;
/** 弹出层，在应用中弹出一个消息提示窗口、提示框等 */
type _UniPopup = Component<_UniPopupProps>;
/** 弹出层实例 */
type _UniPopupInstance = InstanceType<_UniPopup>;

declare global {
    namespace UniHelper {
        /**
         * 弹出方式
         *
         * top 顶部弹出
         *
         * center 居中弹出
         *
         * bottom 底部弹出
         *
         * left 左侧弹出
         *
         * right 右侧弹出
         *
         * message 预置样式，消息提示
         *
         * dialog 预置样式，对话框
         *
         * share 预置样式，底部弹出分享
         */
        type UniPopupType = _UniPopupType;
        type UniPopupOnChangeEvent = _UniPopupOnChangeEvent;
        /** 状态变化时触发 */
        interface UniPopupOnChange extends _UniPopupOnChange {
        }
        /** 点击遮罩层触发 */
        interface UniPopupOnMaskClick extends _UniPopupOnMaskClick {
        }
        /** 弹出层属性 */
        type UniPopupProps = _UniPopupProps;
        /** 弹出层，在应用中弹出一个消息提示窗口、提示框等 */
        type UniPopup = _UniPopup;
        /** 弹出层实例 */
        type UniPopupInstance = _UniPopupInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniPopup: _UniPopup;
    }
}

/**
 * 消息提示主题
 *
 * success 成功
 *
 * warn 警告
 *
 * error 失败
 *
 * info 消息
 */
type _UniPopupDialogType = 'success' | 'warn' | 'error' | 'info';
/**
 * 对话框模式
 *
 * base 提示对话框
 *
 * input 可输入对话框
 */
type _UniPopupDialogMode = 'base' | 'input';
/**
 * 输入框类型
 *
 * text 文本输入键盘
 *
 * number 数字输入键盘
 *
 * idcard 身份证输入键盘
 *
 * digit 带小数点的数字键盘
 *
 * tel 电话输入键盘
 *
 * safe-password 密码安全输入键盘
 *
 * nickname 昵称输入键盘
 */
type _UniPopupDialogInputType = InputType;
/**
 * 输入框值
 *
 * mode="input" 时有效
 */
type _UniPopupDialogValue = string | number;
/** 点击取消时触发 */
interface _UniPopupDialogOnClose {
    (): void;
}
interface _UniPopupDialogOnConfirmEvent {
    value: _UniPopupDialogValue;
}
/** 点击确定时触发 */
interface _UniPopupDialogOnConfirm {
    (event?: _UniPopupDialogOnConfirmEvent): void;
}
/** 对话框弹窗属性 */
type _UniPopupDialogProps = Partial<{
    /**
     * 对话框标题主题
     *
     * success 成功
     *
     * warn 警告
     *
     * error 失败
     *
     * info 消息
     */
    type: _UniPopupDialogType;
    /**
     * 对话框模式
     *
     * base 提示对话框
     *
     * input 可输入对话框
     *
     * 默认为 base
     */
    mode: _UniPopupDialogMode;
    /** 对话框标题 */
    title: string;
    /**
     * 对话框内容
     *
     * mode="base" 时有效
     */
    content: string;
    /**
     * 确定按钮文本
     *
     * 默认为 确定
     */
    confirmText: string;
    /**
     * 取消按钮文本
     *
     * 默认为 取消
     */
    cancelText: string;
    /**
     * 输入框类型
     *
     * mode="input" 时有效
     *
     * text 文本输入键盘
     *
     * number 数字输入键盘
     *
     * idcard 身份证输入键盘
     *
     * digit 带小数点的数字键盘
     *
     * tel 电话输入键盘
     *
     * safe-password 密码安全输入键盘
     *
     * nickname 昵称输入键盘
     *
     * 默认为 text
     */
    inputType: _UniPopupDialogInputType;
    /**
     * 输入框默认值
     *
     * mode="input" 时有效
     */
    value: _UniPopupDialogValue;
    /**
     * 输入框提示文字
     *
     * mode="input" 时有效
     */
    placeholder: string;
    /**
     * 是否拦截按钮事件
     *
     * true 不会关闭对话框，手动调用 close 以关闭
     *
     * 默认为 false
     */
    beforeClose: boolean;
    /** 点击取消时触发 */
    onClose: _UniPopupDialogOnClose;
    /** 点击确定时触发 */
    onConfirm: _UniPopupDialogOnConfirm;
}>;
/** 对话框弹窗 */
type _UniPopupDialog = Component<_UniPopupDialogProps>;
type _UniPopupDialogInstance = InstanceType<_UniPopupDialog>;

declare global {
    namespace UniHelper {
        /**
         * 消息提示主题
         *
         * success 成功
         *
         * warn 警告
         *
         * error 失败
         *
         * info 消息
         */
        type UniPopupDialogType = _UniPopupDialogType;
        /**
         * 对话框模式
         *
         * base 提示对话框
         *
         * input 可输入对话框
         */
        type UniPopupDialogMode = _UniPopupDialogMode;
        /**
         * 输入框值
         *
         * mode="input" 时有效
         */
        type UniPopupDialogValue = _UniPopupDialogValue;
        /** 点击取消时触发 */
        interface UniPopupDialogOnClose extends _UniPopupDialogOnClose {
        }
        type UniPopupDialogOnConfirmEvent = _UniPopupDialogOnConfirmEvent;
        /** 点击确定时触发 */
        interface UniPopupDialogOnConfirm extends _UniPopupDialogOnConfirm {
        }
        type UniPopupDialogProps = _UniPopupDialogProps;
        type UniPopupDialog = _UniPopupDialog;
        type UniPopupDialogInstance = _UniPopupDialogInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniPopupDialog: _UniPopupDialog;
    }
}

/**
 * 消息提示主题
 *
 * success 成功
 *
 * warn 警告
 *
 * error 失败
 *
 * info 消息
 */
type _UniPopupMessageType = 'success' | 'warn' | 'error' | 'info';
/** 消息弹窗属性 */
type _UniPopupMessageProps = Partial<{
    /**
     * 消息提示主题
     *
     * success 成功
     *
     * warn 警告
     *
     * error 失败
     *
     * info 消息
     *
     * 默认为 success
     */
    type: _UniPopupMessageType;
    /** 消息提示文字 */
    message: string;
    /**
     * 消息显示时间，超过后自动关闭
     *
     * 设置为 0 不会自动关闭，需手动调用 close 关闭
     *
     * 默认为 3000
     */
    duration: number;
    /**
     * 是否显示遮罩层
     *
     * 默认为 false
     */
    maskShow: boolean;
}>;
/** 消息弹窗 */
type _UniPopupMessage = Component<_UniPopupMessageProps>;
type _UniPopupMessageInstance = InstanceType<_UniPopupMessage>;

declare global {
    namespace UniHelper {
        /**
         * 消息提示主题
         *
         * success 成功
         *
         * warn 警告
         *
         * error 失败
         *
         * info 消息
         */
        type UniPopupMessageType = _UniPopupMessageType;
        /** 消息弹窗属性 */
        type UniPopupMessageProps = _UniPopupMessageProps;
        /** 消息弹窗 */
        type UniPopupMessage = _UniPopupMessage;
        type UniPopupMessageInstance = _UniPopupMessageInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniPopupMessage: _UniPopupMessage;
    }
}

interface _UniPopupShareOnSelectEvent {
    item: {
        text: string;
        icon: string;
        name: string;
    };
    index: number;
}
/** 选择时触发 */
interface _UniPopupShareOnSelect {
    (event: _UniPopupShareOnSelectEvent): void;
}
/** 分享弹窗属性 */
type _UniPopupShareProps = Partial<{
    /** 分享弹窗标题 */
    title: string;
    /**
     * 是否拦截按钮事件
     *
     * true 不会关闭对话框，手动调用 close 以关闭
     *
     * 默认为 false
     */
    beforeClose: boolean;
    /** 选择时触发 */
    onSelect: _UniPopupShareOnSelect;
}>;
/** 分享弹窗 */
type _UniPopupShare = Component<_UniPopupShareProps>;
type _UniPopupShareInstance = InstanceType<_UniPopupShare>;

declare global {
    namespace UniHelper {
        type UniPopupShareOnSelectEvent = _UniPopupShareOnSelectEvent;
        /** 选择时触发 */
        interface UniPopupShareOnSelect extends _UniPopupShareOnSelect {
        }
        /** 分享弹窗属性 */
        type UniPopupShareProps = _UniPopupShareProps;
        /** 分享弹窗 */
        type UniPopupShare = _UniPopupShare;
        type UniPopupShareInstance = _UniPopupShareInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniPopupShare: _UniPopupShare;
    }
}

/** 评分 */
type _UniRateValue = number;
interface _UniRateOnChangeEvent {
    value: _UniRateValue;
}
/** 值改变时触发 */
interface _UniRateOnChange {
    (event: _UniRateOnChangeEvent): void;
}
/** 评分组件属性 */
type _UniRateProps = Partial<{
    /**
     * 当前评分
     *
     * 默认为 0
     */
    value: _UniRateValue;
    /**
     * 未选中状态的星星颜色
     *
     * 默认为 #ececec
     */
    color: string;
    /**
     * 选中状态的星星颜色
     *
     * 默认为 #ffca3e
     */
    activeColor: string;
    /**
     * 禁用状态的星星颜色
     *
     * 默认为 #c0c0c0
     */
    disabledColor: string;
    /**
     * 星星的大小
     *
     * 如果传入 number 默认使用 px
     *
     * 可传入其他自定义单位的宽度值
     *
     * 默认为 24
     */
    size: number | string;
    /**
     * 最大评分评分数量
     *
     * 默认为 5
     */
    max: number;
    /**
     * 星星的间距
     *
     * 单位为 px
     *
     * 默认为 0
     */
    margin: number | string;
    /**
     * 是否显示实心星星
     *
     * 默认为 true
     */
    isFill: boolean;
    /**
     * 是否为禁用状态
     *
     * 默认为 false
     */
    disabled: boolean;
    /**
     * 是否为只读状态
     *
     * 默认为 false
     */
    readonly: boolean;
    /**
     * 是否展示半星
     *
     * 默认为 false
     */
    allowHalf: boolean;
    /**
     * 是否支持滑动手势
     *
     * 默认为 true
     */
    touchable: boolean;
    /** 值改变时触发 */
    onChange: _UniRateOnChange;
}>;
/** 评分组件，多用于购买商品后，对商品进行评价等场景 */
type _UniRate = Component<_UniRateProps>;
/** 评分组件实例 */
type _UniRateInstance = InstanceType<_UniRate>;

declare global {
    namespace UniHelper {
        /** 评分 */
        type UniRateValue = _UniRateValue;
        type UniRateOnChangeEvent = _UniRateOnChangeEvent;
        /** 值改变时触发 */
        interface UniRateOnChange extends _UniRateOnChange {
        }
        /** 评分组件属性 */
        type UniRateProps = _UniRateProps;
        /** 评分组件，多用于购买商品后，对商品进行评价等场景 */
        type UniRate = _UniRate;
        /** 评分组件实例 */
        type UniRateInstance = _UniRateInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 评分组件，多用于购买商品后，对商品进行评价等场景 */
        UniRate: _UniRate;
    }
}

/** flex 布局下的水平排列方式 */
type _UniRowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
/** flex 布局下的垂直排列方式 */
type _UniRowAlign = 'top' | 'middle' | 'bottom';
/** 行属性 */
type _UniRowProps = Partial<{
    /**
     * 栅格间隔
     *
     * 默认为 0
     */
    gutter: number;
    /**
     * flex 布局下的水平排列方式
     *
     * 默认为 start
     */
    justify: _UniRowJustify;
    /**
     * flex 布局下的垂直排列方式
     *
     * 默认为 top
     */
    align: _UniRowAlign;
    /**
     * nvue 中无百分比 width，使用 span 等属性时，需配置此项 rpx 值
     *
     * 此项不会影响其他平台展示效果
     *
     * 默认为 750rpx
     */
    width: number | string;
}>;
/** 流式栅格系统中的行 */
type _UniRow = Component<_UniRowProps>;
/** 流式栅格系统中的行实例 */
type _UniRowInstance = InstanceType<_UniRow>;

declare global {
    namespace UniHelper {
        /** flex 布局下的水平排列方式 */
        type UniRowJustify = _UniRowJustify;
        /** flex 布局下的垂直排列方式 */
        type UniRowAlign = _UniRowAlign;
        /** 行属性 */
        type UniRowProps = _UniRowProps;
        /** 流式栅格系统中的行 */
        type UniRow = _UniRow;
        /** 流式栅格系统中的行实例 */
        type UniRowInstance = _UniRowInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 流式栅格系统中的行 */
        UniRow: _UniRow;
    }
}

/** 绑定值 */
type _UniSearchBarValue = string | number;
/**
 * 清除按钮的显示方式
 *
 * always 一直显示
 *
 * auto 输入框不为空时显示
 *
 * none 一直不显示
 */
type _UniSearchBarClearButton = 'always' | 'auto' | 'none';
/**
 * 取消按钮的显示方式
 *
 * always 一直显示
 *
 * auto 输入框不为空时显示
 *
 * none 一直不显示
 */
type _UniSearchBarCancelButton = 'always' | 'auto' | 'none';
interface _UniSearchBarBaseEvent {
    value: _UniSearchBarValue;
}
type _UniSearchBarOnConfirmEvent = _UniSearchBarBaseEvent;
/** 确认时触发 */
interface _UniSearchBarOnConfirm {
    (event: _UniSearchBarOnConfirmEvent): void;
}
type _UniSearchBarOnInputEvent = _UniSearchBarBaseEvent;
/** value 改变时触发 */
interface _UniSearchBarOnInput {
    (event: _UniSearchBarOnInputEvent): void;
}
type _UniSearchBarOnCancelEvent = _UniSearchBarBaseEvent;
/** 取消时触发 */
interface _UniSearchBarOnCancel {
    (event: _UniSearchBarOnCancelEvent): void;
}
type _UniSearchBarOnClearEvent = _UniSearchBarBaseEvent;
/** 清除时触发 */
interface _UniSearchBarOnClear {
    (event: _UniSearchBarOnClearEvent): void;
}
type _UniSearchBarOnFocusEvent = _UniSearchBarBaseEvent;
/** 聚焦时触发 */
interface _UniSearchBarOnFocus {
    (event: _UniSearchBarOnFocusEvent): void;
}
type _UniSearchBarOnBlurEvent = _UniSearchBarBaseEvent;
/** 失焦时触发 */
interface _UniSearchBarOnBlur {
    (event: _UniSearchBarOnBlurEvent): void;
}
/** 搜索栏属性 */
type _UniSearchBarProps = Partial<{
    /** 绑定值 */
    value: _UniSearchBarValue;
    /**
     * 占位文字
     *
     * 默认为 搜索
     */
    placeholder: string;
    /**
     * 搜索栏圆角
     *
     * 单位为 px
     *
     * 默认为 5
     */
    radius: number | string;
    /**
     * 清除按钮的显示方式
     *
     * always 一直显示
     *
     * auto 输入框不为空时显示
     *
     * none 一直不显示
     *
     * 默认为 auto
     */
    clearButton: _UniSearchBarClearButton;
    /**
     * 取消按钮的显示方式
     *
     * always 一直显示
     *
     * auto 输入框不为空时显示
     *
     * none 一直不显示
     *
     * 默认为 auto
     */
    cancelButton: _UniSearchBarCancelButton;
    /**
     * 取消按钮的文字
     *
     * 默认为 取消
     */
    cancelText: string;
    /**
     * 输入框背景颜色
     *
     * 默认为 #f8f8f8
     */
    bgColor: string;
    /**
     * 最大长度
     *
     * 默认为 100
     */
    maxlength: number | string;
    /**
     * 是否自动聚焦
     *
     * 默认为 false
     */
    focus: boolean;
    /** 确认时触发 */
    onConfirm: _UniSearchBarOnConfirm;
    /** value 改变时触发 */
    onInput: _UniSearchBarOnInput;
    /** 取消时触发 */
    onCancel: _UniSearchBarOnCancel;
    /** 清除时触发 */
    onClear: _UniSearchBarOnClear;
    /** 聚焦时触发 */
    onFocus: _UniSearchBarOnFocus;
    /** 失焦时触发 */
    onBlur: _UniSearchBarOnBlur;
}>;
/** 搜索栏 */
type _UniSearchBar = Component<_UniSearchBarProps>;
/** 搜索栏实例 */
type _UniSearchBarInstance = InstanceType<_UniSearchBar>;

declare global {
    namespace UniHelper {
        /** 绑定值 */
        type UniSearchBarValue = _UniSearchBarValue;
        /**
         * 清除按钮的显示方式
         *
         * always 一直显示
         *
         * auto 输入框不为空时显示
         *
         * none 一直不显示
         */
        type UniSearchBarClearButton = _UniSearchBarClearButton;
        /**
         * 取消按钮的显示方式
         *
         * always 一直显示
         *
         * auto 输入框不为空时显示
         *
         * none 一直不显示
         */
        type UniSearchBarCancelButton = _UniSearchBarCancelButton;
        type UniSearchBarBaseEvent = _UniSearchBarBaseEvent;
        type UniSearchBarOnConfirmEvent = _UniSearchBarOnConfirmEvent;
        /** 确认时触发 */
        interface UniSearchBarOnConfirm extends _UniSearchBarOnConfirm {
        }
        type UniSearchBarOnInputEvent = _UniSearchBarOnInputEvent;
        /** value 改变时触发 */
        interface UniSearchBarOnInput extends _UniSearchBarOnInput {
        }
        type UniSearchBarOnCancelEvent = _UniSearchBarOnCancelEvent;
        /** 取消时触发 */
        interface UniSearchBarOnCancel extends _UniSearchBarOnCancel {
        }
        type UniSearchBarOnClearEvent = _UniSearchBarOnClearEvent;
        /** 清除时触发 */
        interface UniSearchBarOnClear extends _UniSearchBarOnClear {
        }
        type UniSearchBarOnFocusEvent = _UniSearchBarOnFocusEvent;
        /** 聚焦时触发 */
        interface UniSearchBarOnFocus extends _UniSearchBarOnFocus {
        }
        type UniSearchBarOnBlurEvent = _UniSearchBarOnBlurEvent;
        /** 失焦时触发 */
        interface UniSearchBarOnBlur extends _UniSearchBarOnBlur {
        }
        /** 搜索栏属性 */
        type UniSearchBarProps = _UniSearchBarProps;
        /** 搜索栏 */
        type UniSearchBar = _UniSearchBar;
        /** 搜索栏实例 */
        type UniSearchBarInstance = _UniSearchBarInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 搜索栏 */
        UniSearchBar: _UniSearchBar;
    }
}

/**
 * 装饰类型
 *
 * line 竖线
 *
 * circle 圆形
 *
 * square 方形
 */
type _UniSectionType = 'line' | 'circle' | 'square';
/** 点击时触发 */
interface _UniSectionOnClick {
    (): void;
}
/** 标题栏属性 */
type _UniSectionProps = Partial<{
    /**
     * 装饰类型
     *
     * line 竖线
     *
     * circle 圆形
     *
     * square 方形
     */
    type: _UniSectionType;
    /** 主标题 */
    title: string;
    /**
     * 主标题字体大小
     *
     * 默认为 14px
     */
    titleFontSize: string;
    /**
     * 主标题字体颜色
     *
     * 默认为 #333
     */
    titleColor: string;
    /** 副标题 */
    subTitle: string;
    /**
     * 主标题字体大小
     *
     * 默认为 12px
     */
    subTitleFontSize: string;
    /**
     * 主标题字体颜色
     *
     * 默认为 #999
     */
    subTitleColor: string;
    /**
     * 默认插槽的 padding 值
     *
     * string 自定义的 padding 值
     *
     * true 10px
     *
     * 默认为 false，表示不设置 padding 值
     */
    padding: boolean | string;
    /** 点击时触发 */
    onClick: _UniSectionOnClick;
}>;
/** 标题栏 */
type _UniSection = Component<_UniSectionProps>;
type _UniSectionInstance = InstanceType<_UniSection>;

declare global {
    namespace UniHelper {
        /**
         * 装饰类型
         *
         * line 竖线
         *
         * circle 圆形
         *
         * square 方形
         */
        type UniSectionType = _UniSectionType;
        /** 点击时触发 */
        interface UniSectionOnClick extends _UniSectionOnClick {
        }
        /** 标题栏属性 */
        type UniSectionProps = _UniSectionProps;
        /** 标题栏 */
        type UniSection = _UniSection;
        type UniSectionInstance = _UniSectionInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniSection: _UniSection;
    }
}

/** 当前选中的索引 */
type _UniSegmentedControlCurrent = number;
/**
 * 分段器样式类型
 *
 * button 按钮
 *
 * text 文字
 */
type _UniSegmentedControlStyleType = 'button' | 'text';
interface _UniSegmentedControlOnClickItemEvent {
    currentIndex: _UniSegmentedControlCurrent;
}
/** 点击时触发 */
interface _UniSegmentedControlOnClickItem {
    (event: _UniSegmentedControlOnClickItemEvent): void;
}
/** 分段器属性 */
type _UniSegmentedControlProps = Partial<{
    /**
     * 当前选中的索引
     *
     * 默认为 0
     */
    current: _UniSegmentedControlCurrent;
    /**
     * 分段器样式类型
     *
     * button 按钮
     *
     * text 文字
     *
     * 默认为 button
     */
    styleType: _UniSegmentedControlStyleType;
    /**
     * 选中的标签背景色与边框颜色
     *
     * 默认为 #2979ff
     */
    activeColor: string;
    /** 选项 */
    values: string[];
    /** 点击时触发 */
    onClickItem: _UniSegmentedControlOnClickItem;
}>;
/** 分段器，用作不同视图的显示 */
type _UniSegmentedControl = Component<_UniSegmentedControlProps>;
/** 分段器实例 */
type _UniSegmentedControlInstance = InstanceType<_UniSegmentedControl>;

declare global {
    namespace UniHelper {
        /** 当前选中的索引 */
        type UniSegmentedControlCurrent = _UniSegmentedControlCurrent;
        /**
         * 分段器样式类型
         *
         * button 按钮
         *
         * text 文字
         */
        type UniSegmentedControlStyleType = _UniSegmentedControlStyleType;
        type UniSegmentedControlOnClickItemEvent = _UniSegmentedControlOnClickItemEvent;
        /** 点击时触发 */
        interface UniSegmentedControlOnClickItem extends _UniSegmentedControlOnClickItem {
        }
        /** 分段器属性 */
        type UniSegmentedControlProps = _UniSegmentedControlProps;
        /** 分段器，用作不同视图的显示 */
        type UniSegmentedControl = _UniSegmentedControl;
        /** 分段器实例 */
        type UniSegmentedControlInstance = _UniSegmentedControlInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 分段器，用作不同视图的显示 */
        UniSegmentedControl: _UniSegmentedControl;
    }
}

/**
 * 排列方向
 *
 * row 横向
 *
 * column 纵向
 */
type _UniStepsDirection = 'row' | 'column';
/** 数据源 */
interface _UniStepsOption {
    /** 标题 */
    title: string;
    /** 描述 */
    desc: string;
}
/** 步骤条属性 */
type _UniStepsProps = Partial<{
    /**
     * 当前步骤
     *
     * 默认为 0
     */
    active: number;
    /**
     * 排列方向
     *
     * row 横向
     *
     * column 纵向
     *
     * 默认为 row
     */
    direction: _UniStepsDirection;
    /**
     * 选中状态的颜色
     *
     * 默认为 #2979ff
     */
    activeColor: string;
    /**
     * 未选中状态的颜色
     *
     * 默认为 #b7bdc6
     */
    deactiveColor: string;
    /**
     * 当前步骤图标
     *
     * 默认为 checkbox-filled
     */
    activeIcon: _UniIconsType;
    /** 数据源 */
    options: _UniStepsOption[];
}>;
/** 步骤条，常用于显示进度 */
type _UniSteps = Component<_UniStepsProps>;
/** 步骤条实例 */
type _UniStepsInstance = InstanceType<_UniSteps>;

declare global {
    namespace UniHelper {
        /**
         * 排列方向
         *
         * row 横向
         *
         * column 纵向
         */
        type UniStepsDirection = _UniStepsDirection;
        /** 数据源 */
        interface UniStepsOption extends _UniStepsOption {
        }
        /** 步骤条属性 */
        type UniStepsProps = _UniStepsProps;
        /** 步骤条，常用于显示进度 */
        type UniSteps = _UniSteps;
        /** 步骤条实例 */
        type UniStepsInstance = _UniStepsInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 步骤条 */
        UniSteps: _UniSteps;
    }
}

/** 动态添加数据后，如不能正常滑动，需要主动调用此方法 */
interface _UniSwipeActionResize {
    (): void;
}
/** 关闭所有已经打开的组件 */
interface _UniSwipeActionCloseAll {
    (): void;
}
type _UniSwipeActionProps = Partial<{
    /** 动态添加数据后，如不能正常滑动，需要主动调用此方法 */
    resize: _UniSwipeActionResize;
    /** 关闭所有已经打开的组件 */
    closeAll: _UniSwipeActionCloseAll;
}>;
/**
 * 滑动操作
 *
 * 通过滑动触发选项的容器
 */
type _UniSwipeAction = Component<_UniSwipeActionProps>;
type _UniSwipeActionInstance = InstanceType<_UniSwipeAction>;

declare global {
    namespace UniHelper {
        /** 动态添加数据后，如不能正常滑动，需要主动调用此方法 */
        interface UniSwipeActionResize extends _UniSwipeActionResize {
        }
        /** 关闭所有已经打开的组件 */
        interface UniSwipeActionCloseAll extends _UniSwipeActionCloseAll {
        }
        type UniSwipeActionProps = _UniSwipeActionProps;
        /**
         * 滑动操作
         *
         * 通过滑动触发选项的容器
         */
        type UniSwipeAction = _UniSwipeAction;
        type UniSwipeActionInstance = _UniSwipeActionInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /**
         * 滑动操作
         *
         * 通过滑动触发选项的容器
         */
        UniSwipeAction: _UniSwipeAction;
    }
}

/**
 * 关闭组件
 *
 * autoClose 为 false 时有效
 */
type _UniSwipeActionItemShow = 'left' | 'right' | 'none';
/** 选项内容及样式 */
interface _UniSwipeActionItemOption {
    /** 按钮文字 */
    text: string;
    /** 按钮样式 */
    style: {
        /**
         * 背景音乐
         *
         * 默认为 #c7c6cd
         */
        backgroundColor: string;
        /**
         * 文字颜色
         *
         * 默认为 #ffffff
         */
        color: string;
        /**
         * 字体尺寸
         *
         * 默认为 14px
         */
        fontSize: string;
    };
}
type _UniSwipeActionItemOnClickEventPosition = Exclude<_UniSwipeActionItemShow, 'none'>;
interface _UniSwipeActionItemOnClickEvent {
    content: _UniSwipeActionItemOption;
    index: number;
    position: _UniSwipeActionItemOnClickEventPosition;
}
/** 点击时触发 */
interface _UniSwipeActionItemOnClick {
    (event: _UniSwipeActionItemOnClickEvent): void;
}
/** 打开或关闭时触发 */
interface _UniSwipeActionItemOnChange {
    (show: _UniSwipeActionItemShow): void;
}
type _UniSwipeActionItemProps = Partial<{
    /**
     * 其他组件开启的时候，当前组件是否自动关闭
     *
     * 默认为 true
     */
    autoClose: boolean;
    /**
     * 关闭组件
     *
     * autoClose 为 false 时有效
     *
     * 默认为 none
     */
    show: _UniSwipeActionItemShow;
    /**
     * 滑动阈值
     *
     * 默认为 20
     */
    threshold: number;
    /**
     * 是否禁止滑动
     *
     * 默认为 false
     */
    disabled: boolean;
    /** 左侧选项内容及样式 */
    leftOptions: _UniSwipeActionItemOption[];
    /** 右侧选项内容及样式 */
    rightOptions: _UniSwipeActionItemOption[];
    /** 点击时触发 */
    onClick: _UniSwipeActionItemOnClick;
    /** 打开或关闭时触发 */
    onChange: _UniSwipeActionItemOnChange;
}>;
type _UniSwipeActionItem = Component<_UniSwipeActionItemProps>;
type _UniSwipeActionItemInstance = InstanceType<_UniSwipeActionItem>;

declare global {
    namespace UniHelper {
        /**
         * 关闭组件
         *
         * autoClose 为 false 时有效
         */
        type UniSwipeActionItemShow = _UniSwipeActionItemShow;
        /** 选项内容及样式 */
        interface UniSwipeActionItemOption extends _UniSwipeActionItemOption {
        }
        type UniSwipeActionItemOnClickEventPosition = _UniSwipeActionItemOnClickEventPosition;
        type UniSwipeActionItemOnClickEvent = _UniSwipeActionItemOnClickEvent;
        /** 点击时触发 */
        interface UniSwipeActionItemOnClick extends _UniSwipeActionItemOnClick {
        }
        /** 打开或关闭时触发 */
        interface UniSwipeActionItemOnChange extends _UniSwipeActionItemOnChange {
        }
        type UniSwipeActionItemProps = _UniSwipeActionItemProps;
        type UniSwipeActionItem = _UniSwipeActionItem;
        type UniSwipeActionItemInstance = _UniSwipeActionItemInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniSwipeActionItem: _UniSwipeActionItem;
    }
}

/** 指示点的类型 */
type _UniSwiperDotMode = 'default' | 'round' | 'nav' | 'indexes';
/** 指示点样式 */
interface _UniSwiperDotDotsStyles {
    /**
     * 指示点宽度
     *
     * mode="nav"、mode="indexes" 时无效
     *
     * 单位为 px
     *
     * 默认为 6
     */
    width?: number;
    /**
     * 指示点高度
     *
     * mode="nav"、mode="indexes" 时无效
     *
     * 单位为 px
     *
     * 默认为 6
     */
    height?: number;
    /**
     * 指示点距 swiper 底部的高度
     *
     * 单位为 px
     *
     * 默认为 10
     */
    bottom?: number;
    /**
     * 指示点前景色
     *
     * mode="nav"、mode="indexes" 时有效
     *
     * 默认为 #ffffff
     */
    color?: string;
    /**
     * 未选择指示点背景色
     *
     * 默认为 rgba(0, 0, 0, 0.3)
     */
    backgroundColor?: string;
    /**
     * 未选择指示点边框样式
     *
     * 默认为 1px rgba(0, 0, 0, 0.3) solid
     */
    border?: string;
    /**
     * 已选择指示点背景色
     *
     * mode="nav" 时无效
     *
     * 默认为 #333333
     */
    selectedBackgroundColor?: string;
    /**
     * 已选择指示点边框样式
     *
     * mode="nav" 时无效
     *
     * 默认为 1px rgba(0, 0, 0, 0.9) solid
     */
    selectedBorder?: string;
}
/** 点击时触发 */
interface _UniSwiperDotOnClickItem {
    (index: number): void;
}
/** 轮播图指示点属性 */
type _UniSwiperDotProps = Partial<{
    /**
     * 当前指示点索引
     *
     * 必须是通过 swiper 的 change 事件获取到的 e.detail.current
     *
     * 默认为 0
     */
    current: number;
    /**
     * 指示点类型
     *
     * 默认为 default
     */
    mode: _UniSwiperDotMode;
    /**
     * 显示的内容字段
     *
     * mode="nav" 时有效
     */
    field: string;
    /** 轮播图数据 */
    info: any[];
    /** 指示点样式 */
    dotsStyles: _UniSwiperDotDotsStyles;
    /** 点击时触发 */
    onClickItem: _UniSwiperDotOnClickItem;
}>;
/** 轮播图指示点 */
type _UniSwiperDot = Component<_UniSwiperDotProps>;
type _UniSwiperDotInstance = InstanceType<_UniSwiperDot>;

declare global {
    namespace UniHelper {
        /** 指示点的类型 */
        type UniSwiperDotMode = _UniSwiperDotMode;
        /** 指示点样式 */
        interface UniSwiperDotDotsStyles extends _UniSwiperDotDotsStyles {
        }
        /** 点击时触发 */
        interface UniSwiperDotOnClickItem extends _UniSwiperDotOnClickItem {
        }
        /** 轮播图指示点属性 */
        type UniSwiperDotProps = _UniSwiperDotProps;
        /** 轮播图指示点 */
        type UniSwiperDot = _UniSwiperDot;
        type UniSwiperDotInstance = _UniSwiperDotInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniSwiperDot: _UniSwiperDot;
    }
}

/**
 * 空字符串 单选
 *
 * selection 多选
 */
type _UniTableType = '' | 'selection';
/** 选中全部行 */
interface _UniTableSelectionAll {
    (): void;
}
/**
 * 用于多选表格，切换某一行的选中状态
 *
 * 如果使用了第二个参数，则要设置这一行选中与否
 */
interface _UniTableToggleRowSelection {
    (indexes: number[], selected?: boolean): void;
}
/** 用于多选表格，清空用户的选择 */
interface _UniTableClearSelection {
    (): void;
}
/** 用于多选表格，切换所有行的选中状态 */
interface _UniTableToggleAllSelection {
    (): void;
}
interface _UniTableOnSelectionChangeDetail {
    value: any[];
    index: any[];
}
interface _UniTableOnSelectionChangeEvent {
    detail: _UniTableOnSelectionChangeDetail;
}
/** 开启多选时，当选择项发生变化时会触发该事件 */
interface _UniTableOnSelectionChange {
    (event: _UniTableOnSelectionChangeEvent): void;
}
/** 表格属性 */
type _UniTableProps = Partial<{
    /**
     * 是否带有纵向边框
     *
     * 默认为 false
     */
    border: boolean;
    /**
     * 是否显示斑马线样式
     *
     * 默认为 false
     */
    stripe: boolean;
    /**
     * 空字符串 单选
     *
     * selection 多选
     *
     * 默认为 空字符串
     */
    type?: _UniTableType;
    /**
     * 空数据时显示的文本内容
     *
     * 默认为 没有更多数据
     */
    emptyText: string;
    /**
     * 是否显示加载中
     *
     * 默认为 false
     */
    loading: boolean;
    data: any[];
    /**
     * 行键名
     *
     * 默认为 空字符串
     */
    rowKey: string;
    /** 选中全部行 */
    selectionAll: _UniTableSelectionAll;
    /**
     * 用于多选表格，切换某一行的选中状态
     *
     * 如果使用了第二个参数，则要设置这一行选中与否
     */
    toggleRowSelection: _UniTableToggleRowSelection;
    /** 用于多选表格，清空用户的选择 */
    clearSelection: _UniTableClearSelection;
    /** 用于多选表格，切换所有行的选中状态 */
    toggleAllSelection: _UniTableToggleAllSelection;
    /** 开启多选时，当选择项发生变化时会触发该事件 */
    onSelectionChange: _UniTableOnSelectionChange;
}>;
/** 表格 */
type _UniTable = Component<_UniTableProps>;
/** 表格实例 */
type _UniTableInstance = InstanceType<_UniTable>;

declare global {
    namespace UniHelper {
        /**
         * 空字符串 单选
         *
         * selection 多选
         */
        type UniTableType = _UniTableType;
        /** 选中全部行 */
        interface UniTableSelectionAll extends _UniTableSelectionAll {
        }
        /**
         * 用于多选表格，切换某一行的选中状态
         *
         * 如果使用了第二个参数，则要设置这一行选中与否
         */
        interface UniTableToggleRowSelection extends _UniTableToggleRowSelection {
        }
        /** 用于多选表格，清空用户的选择 */
        interface UniTableClearSelection extends _UniTableClearSelection {
        }
        /** 用于多选表格，切换所有行的选中状态 */
        interface UniTableToggleAllSelection extends _UniTableToggleAllSelection {
        }
        interface UniTableOnSelectionChangeDetail extends _UniTableOnSelectionChangeDetail {
        }
        type UniTableOnSelectionChangeEvent = _UniTableOnSelectionChangeEvent;
        /** 开启多选时，当选择项发生变化时会触发该事件 */
        interface UniTableOnSelectionChange extends _UniTableOnSelectionChange {
        }
        /** 表格属性 */
        type UniTableProps = _UniTableProps;
        /** 表格 */
        type UniTable = _UniTable;
        /** 表格实例 */
        type UniTableInstance = _UniTableInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 表格 */
        UniTable: _UniTable;
    }
}

/**
 * 大小尺寸
 *
 * normal 正常
 *
 * small 小
 */
type _UniTagSize = 'normal' | 'small';
/**
 * 颜色类型
 *
 * default 灰色
 *
 * primary 蓝色
 *
 * success 绿色
 *
 * warning 黄色
 *
 * error 红色
 *
 * royal 紫色
 */
type _UniTagType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'royal';
/** 自定义样式 */
type _UniTagCustomStyle = string;
/** 点击触发 */
interface _UniTagOnClick {
    (): void;
}
type _UniTagProps = Partial<{
    /** 标签内容 */
    text: string;
    /**
     * 大小尺寸
     *
     * normal 正常
     *
     * small 小
     *
     * 默认为 normal
     */
    size: _UniTagSize;
    /**
     * 颜色类型
     *
     * default 灰色
     *
     * primary 蓝色
     *
     * success 绿色
     *
     * warning 黄色
     *
     * error 红色
     *
     * royal 紫色
     *
     * 默认为 default
     */
    type: _UniTagType;
    /**
     * 是否为禁用状态
     *
     * 默认为 false
     */
    disabled: boolean;
    /**
     * 是否无需背景颜色
     *
     * 默认为 false
     */
    inverted: boolean;
    /**
     * 是否为圆角
     *
     * 默认为 false
     */
    circle: boolean;
    /**
     * 是否为标记样式
     *
     * 默认为 false
     */
    mark: boolean;
    /** 自定义样式 */
    customStyle: _UniTagCustomStyle;
    /** 点击触发 */
    onClick: _UniTagOnClick;
}>;
/** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
type _UniTag = Component<_UniTagProps>;
type _UniTagInstance = InstanceType<_UniTag>;

declare global {
    namespace UniHelper {
        /**
         * 大小尺寸
         *
         * normal 正常
         *
         * small 小
         */
        type UniTagSize = _UniTagSize;
        /**
         * 颜色类型
         *
         * default 灰色
         *
         * primary 蓝色
         *
         * success 绿色
         *
         * warning 黄色
         *
         * error 红色
         *
         * royal 紫色
         */
        type UniTagType = _UniTagType;
        /** 自定义样式 */
        type UniTagCustomStyle = _UniTagCustomStyle;
        /** 点击触发 */
        interface UniTagOnClick extends _UniTagOnClick {
        }
        type UniTagProps = _UniTagProps;
        /** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
        type UniTag = _UniTag;
        type UniTagInstance = _UniTagInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
        UniTag: _UniTag;
    }
}

type _UniTrProps = Partial<{
    /**
     * 是否禁用选择
     *
     * 默认为 false
     */
    disabled: boolean;
    keyValue: string | number;
}>;
type _UniTr = Component<_UniTrProps>;
type _UniTrInstance = InstanceType<_UniTr>;

declare global {
    namespace UniHelper {
        type UniTrProps = _UniTrProps;
        type UniTr = _UniTr;
        type UniTrInstance = _UniTrInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniTr: _UniTr;
    }
}

/** 单元格对齐方式 */
type _UniTdAlign = 'left' | 'center' | 'right';
type _UniTdProps = Partial<{
    /**
     * 单元格宽度
     *
     * 单位为 px
     */
    width: string | number;
    /**
     * 对齐方式
     *
     * 默认为 left
     */
    align: _UniTdAlign;
    /**
     * 行合并
     *
     * 默认为 1
     */
    rowspan: number | string;
    /**
     * 列合并
     *
     * 默认为 1
     */
    colspan: number | string;
}>;
type _UniTd = Component<_UniTdProps>;
type _UniTdInstance = InstanceType<_UniTd>;

declare global {
    namespace UniHelper {
        /** 单元格对齐方式 */
        type UniTdAlign = _UniTdAlign;
        type UniTdProps = _UniTdProps;
        type UniTd = _UniTd;
        type UniTdInstance = _UniTdInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UniTd: _UniTd;
    }
}

/** 对齐方式 */
type _UniThAlign = 'left' | 'center' | 'right';
/** 筛选类型 */
type _UniThFilterType = 'search' | 'select' | 'range' | 'date' | 'timestamp';
/** 筛选数据 */
interface _UniThFilterData {
    /** 显示内容 */
    text: string;
    /** 值 */
    value: string;
}
interface _UniThOnSortChangeEvent {
    order: 'ascending' | 'descending' | null;
}
/** 点击排序时触发 */
interface _UniThOnSortChange {
    (event: _UniThOnSortChangeEvent): void;
}
type _UniThOnFilterChangeEvent = {
    filterType: 'search';
    filter: string;
} | {
    filterType: 'select' | 'range';
    filter: [string, string];
} | {
    filterType: 'date' | 'timestamp';
    filter: [number, number];
};
/** 筛选数据时触发 */
interface _UniThOnFilterChange {
    (event: _UniThOnFilterChangeEvent): void;
}
type _UniThProps = Partial<{
    /**
     * 单元格宽度
     *
     * 如果传入 number 默认使用 px
     */
    width: string | number;
    /**
     * 对齐方式
     *
     * 默认为 left
     */
    align: _UniThAlign;
    /** 筛选类型 */
    filterType: _UniThFilterType;
    /** 筛选数据 */
    filterData: _UniThFilterData[];
    /**
     * 是否启用排序
     *
     * 默认为 false
     */
    sortable: boolean;
    /**
     * 行合并
     *
     * 默认为 1
     */
    rowspan: number | string;
    /**
     * 列合并
     *
     * 默认为 1
     */
    colspan: number | string;
    /** 点击排序时触发 */
    onSortChange: _UniThOnSortChange;
    /** 筛选数据时触发 */
    onFilterChange: _UniThOnFilterChange;
}>;
type _UniTh = Component<_UniThProps>;
type _UniThInstance = InstanceType<_UniTh>;

declare global {
    namespace UniHelper {
        /** 对齐方式 */
        type UniThAlign = _UniThAlign;
        /** 筛选类型 */
        type UniThFilterType = _UniThFilterType;
        /** 筛选数据 */
        interface UniThFilterData extends _UniThFilterData {
        }
        type UniThOnSortChangeEvent = _UniThOnSortChangeEvent;
        /** 点击排序时触发 */
        interface UniThOnSortChange extends _UniThOnSortChange {
        }
        type UniThOnFilterChangeEvent = _UniThOnFilterChangeEvent;
        /** 筛选数据时触发 */
        interface UniThOnFilterChange extends _UniThOnFilterChange {
        }
        type UniThProps = _UniThProps;
        type UniTh = _UniTh;
        type UniThInstance = _UniThInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
        UniTh: _UniTh;
    }
}

/** 标题类型 */
type _UniTitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
/**
 * 对齐方式
 *
 * left 左对齐
 *
 * center 居中对齐
 *
 * right 右对齐
 */
type _UniTitleAlign = 'left' | 'center' | 'right';
type _UniTitleProps = Partial<{
    /** 标题类型 */
    type: _UniTitleType;
    /** 章节标题内容 */
    title: string;
    /**
     * 对齐方式
     *
     * left 左对齐
     *
     * center 居中对齐
     *
     * right 右对齐
     *
     * 默认为 left
     */
    align: _UniTitleAlign;
    /**
     * 字体颜色
     *
     * 默认为 #333
     */
    color: string;
    /**
     * 是否开启统计
     *
     * 如果不填写 type，默认开启
     *
     * 如果填写 type，默认关闭
     */
    stat: boolean;
}>;
/**
 * 章节标题，通常用于记录页面标题
 *
 * 使用当前组件，uni-app 如果开启统计，将会自动统计页面标题
 */
type _UniTitle = Component<_UniTitleProps>;
type _UniTitleInstance = InstanceType<_UniTitle>;

declare global {
    namespace UniHelper {
        /** 标题类型 */
        type UniTitleType = _UniTitleType;
        /**
         * 对齐方式
         *
         * left 左对齐
         *
         * center 居中对齐
         *
         * right 右对齐
         */
        type UniTitleAlign = _UniTitleAlign;
        type UniTitleProps = _UniTitleProps;
        /**
         * 章节标题，通常用于记录页面标题
         *
         * 使用当前组件，uni-app 如果开启统计，将会自动统计页面标题
         */
        type UniTitle = _UniTitle;
        type UniTitleInstance = _UniTitleInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
        UniTitle: _UniTitle;
    }
}

type _UniTooltipProps = Partial<{
    /** 显示内容 */
    content: string;
}>;
/** 提示文字 */
type _UniTooltip = Component<_UniTooltipProps>;
type _UniTooltipInstance = InstanceType<_UniTooltip>;

declare global {
    namespace UniHelper {
        type UniTooltipProps = _UniTooltipProps;
        /** 提示文字 */
        type UniTooltip = _UniTooltip;
        type UniTooltipInstance = _UniTooltipInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 提示文字 */
        UniTooltip: _UniTooltip;
    }
}

/**
 * 内置过渡动画类型
 *
 * fade 渐隐渐出过渡
 *
 * slide-top 由上至下过渡
 *
 * slide-right 由右至左过渡
 *
 * slide-bottom 由下至上过渡
 *
 * slide-left 由左至右过渡
 *
 * zoom-in 由小到大过渡
 *
 * zoom-out 由大到小过渡
 */
type _UniTransitionModeClass = 'fade' | 'slide-top' | 'slide-right' | 'slide-bottom' | 'slide-left' | 'zoom-in' | 'zoom-out';
/**
 * 动画效果
 *
 * linear 动画从头到尾的速度是相同的
 *
 * ease 动画以低速开始，然后加快，在结束前变慢
 *
 * ease-in 动画以低速开始
 *
 * ease-in-out 动画以低速开始和结束
 *
 * ease-out 动画以低速结束
 *
 * step-start 动画第一帧就跳至结束状态直到结束
 *
 * step-end 动画一直保持开始状态，最后一帧跳到结束状态
 */
type _UniTransitionTimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'step-start' | 'step-end';
interface _UniTransitionConfig {
    /**
     * 动画持续时间
     *
     * 单位为 ms
     *
     * 默认为 400
     */
    duration: number;
    /**
     * 动画效果
     *
     * linear 动画从头到尾的速度是相同的
     *
     * ease 动画以低速开始，然后加快，在结束前变慢
     *
     * ease-in 动画以低速开始
     *
     * ease-in-out 动画以低速开始和结束
     *
     * ease-out 动画以低速结束
     *
     * step-start 动画第一帧就跳至结束状态直到结束
     *
     * step-end 动画一直保持开始状态，最后一帧跳到结束状态
     *
     * 默认为 linear
     */
    timingFunction: _UniTransitionTimingFunction;
    /**
     * 动画延迟时间
     *
     * 单位为 ms
     *
     * 默认为 0
     */
    delay: number;
    /**
     * 动画执行是否影响布局
     *
     * 默认为 false
     */
    needLayout: boolean;
    /**
     * 设置 transform-origin
     *
     * 默认为 center center
     */
    transformOrigin: string;
}
interface _UniTransitionType {
    /**
     * 透明度
     *
     * 取值范围为 0 - 1
     */
    opacity: number;
    /** 背景颜色 */
    backgroundColor: string;
    /**
     * 宽度
     *
     * 如果传入 number 默认使用 px
     *
     * 可传入其他自定义单位的宽度值
     */
    width: number | string;
    /**
     * 高度
     *
     * 如果传入 number 默认使用 px
     *
     * 可传入其他自定义单位的高度值
     */
    height: number | string;
    /**
     * 如果传入 number 默认使用 px
     *
     * 可传入其他自定义单位的高度值
     */
    top: number | string;
    /**
     * 如果传入 number 默认使用 px
     *
     * 可传入其他自定义单位的高度值
     */
    right: number | string;
    /**
     * 如果传入 number 默认使用 px
     *
     * 可传入其他自定义单位的高度值
     */
    bottom: number | string;
    /**
     * 如果传入 number 默认使用 px
     *
     * 可传入其他自定义单位的高度值
     */
    left: number | string;
    /**
     * 从原点顺时针旋转一个角度
     *
     * 取值范围 -180 - 180
     */
    rotate: number;
    /**
     * 在 X 轴旋转一个角度
     *
     * 取值范围 -180 - 180
     */
    rotateX: number;
    /**
     * 在 Y 轴旋转一个角度
     *
     * 取值范围 -180 - 180
     */
    rotateY: number;
    /**
     * 在 Z 轴旋转一个角度
     *
     * 取值范围 -180 - 180
     */
    rotateZ: number;
    /** 同 transform-function rotate3d */
    rotate3d: string;
    /**
     * 一个参数时表示在 X 轴、Y 轴同时缩放 sx 倍数
     *
     * 两个参数时表示在 X 轴缩放 sx 倍数，在 Y 轴缩放 sy 倍数
     */
    scale: [number] | [number, number];
    /** 在 X 轴的缩放倍数 */
    scaleX: number;
    /** 在 Y 轴的缩放倍数 */
    scaleY: number;
    /** 在 Z 轴的缩放倍数 */
    scaleZ: number;
    /** 在 X 轴、Y 轴和 Z 轴的缩放倍数 */
    scale3d: number;
    /**
     * 一个参数时表示在 X 轴、Y 轴同时偏移
     *
     * 两个参数时表示在 X 轴、Y 轴分别偏移
     *
     * 单位为 px
     */
    translate: [string] | [string, string];
    /**
     * 在 X 轴的偏移
     *
     * 单位为 px
     */
    translateX: string;
    /**
     * 在 Y 轴的偏移
     *
     * 单位为 px
     */
    translateY: string;
    /**
     * 在 Z 轴的偏移
     *
     * 单位为 px
     */
    translateZ: string;
    /**
     * 在 X 轴、Y 轴和 Z 轴的偏移
     *
     * 单位为 px
     */
    translate3d: string;
}
/** 手动设置动画配置 */
interface _UniTransitionInit {
    (config: _UniTransitionConfig): void;
}
/** 调用表示一组动画完成 */
interface _UniTransitionStep {
    (type: _UniTransitionType, config?: _UniTransitionConfig): void;
}
/**
 * 执行动画
 *
 * @param callback 所有动画执行完毕后回调
 */
interface _UniTransitionRun {
    (callback: () => void): void;
}
interface _UniTransitionOnClickEvent {
    /** 动画是否可见 */
    detail: boolean;
}
/** 点击触发 */
interface _UniTransitionOnClick {
    (event: _UniTransitionOnClickEvent): void;
}
type _UniTransitionOnChangeEvent = _UniTransitionOnClickEvent;
/** 过渡动画结束时触发 */
interface _UniTransitionOnChange {
    (event: _UniTransitionOnChangeEvent): void;
}
type _UniTransitionProps = Partial<{
    /**
     * 控制组件是否显示
     *
     * 默认为 false
     */
    show: boolean;
    /**
     * 内置过渡动画类型
     *
     * fade 渐隐渐出过渡
     *
     * slide-top 由上至下过渡
     *
     * slide-right 由右至左过渡
     *
     * slide-bottom 由下至上过渡
     *
     * slide-left 由左至右过渡
     *
     * zoom-in 由小到大过渡
     *
     * zoom-out 由大到小过渡
     */
    modeClass: _UniTransitionModeClass | _UniTransitionModeClass[];
    /** 自定义类名 */
    customClass: string;
    /**
     * 过渡动画持续时间
     *
     * 默认为 300
     */
    duration: number;
    /** 手动设置动画配置 */
    init: _UniTransitionStep;
    /** 调用表示一组动画完成 */
    step: _UniTransitionStep;
    /**
     * 执行动画
     *
     * @param 所有动画执行完毕后回调
     */
    run: _UniTransitionRun;
    /** 点击触发 */
    onClick: _UniTransitionOnClick;
    /** 过渡动画结束时触发 */
    onChange: _UniTransitionOnChange;
}>;
/** 元素过渡动画 */
type _UniTransition = Component<_UniTransitionProps>;
type _UniTransitionInstance = InstanceType<_UniTransition>;

declare global {
    namespace UniHelper {
        /**
         * 内置过渡动画类型
         *
         * fade 渐隐渐出过渡
         *
         * slide-top 由上至下过渡
         *
         * slide-right 由右至左过渡
         *
         * slide-bottom 由下至上过渡
         *
         * slide-left 由左至右过渡
         *
         * zoom-in 由小到大过渡
         *
         * zoom-out 由大到小过渡
         */
        type UniTransitionModeClass = _UniTransitionModeClass;
        /**
         * 动画效果
         *
         * linear 动画从头到尾的速度是相同的
         *
         * ease 动画以低速开始，然后加快，在结束前变慢
         *
         * ease-in 动画以低速开始
         *
         * ease-in-out 动画以低速开始和结束
         *
         * ease-out 动画以低速结束
         *
         * step-start 动画第一帧就跳至结束状态直到结束
         *
         * step-end 动画一直保持开始状态，最后一帧跳到结束状态
         */
        type UniTransitionTimingFunction = _UniTransitionTimingFunction;
        interface UniTransitionConfig extends _UniTransitionConfig {
        }
        interface UniTransitionType extends _UniTransitionType {
        }
        /** 手动设置动画配置 */
        interface UniTransitionInit extends _UniTransitionInit {
        }
        /** 调用表示一组动画完成 */
        interface UniTransitionStep extends _UniTransitionStep {
        }
        /**
         * 执行动画
         *
         * @param callback 所有动画执行完毕后回调
         */
        interface UniTransitionRun extends _UniTransitionRun {
        }
        type UniTransitionOnClickEvent = _UniTransitionOnClickEvent;
        /** 点击触发 */
        interface UniTransitionOnClick extends _UniTransitionOnClick {
        }
        type UniTransitionOnChangeEvent = _UniTransitionOnChangeEvent;
        /** 过渡动画结束时触发 */
        interface UniTransitionOnChange extends _UniTransitionOnChange {
        }
        type UniTransitionProps = _UniTransitionProps;
        /** 元素过渡动画 */
        type UniTransition = _UniTransition;
        type UniTransitionInstance = _UniTransitionInstance;
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        /** 元素过渡动画 */
        UniTransition: _UniTransition;
    }
}

export { _UniBadge as UniBadge, _UniBadgeAbsolute as UniBadgeAbsolute, _UniBadgeCustomStyle as UniBadgeCustomStyle, _UniBadgeInstance as UniBadgeInstance, _UniBadgeOnClick as UniBadgeOnClick, _UniBadgeProps as UniBadgeProps, _UniBadgeSize as UniBadgeSize, _UniBadgeType as UniBadgeType, _UniBreadcrumb as UniBreadcrumb, _UniBreadcrumbInstance as UniBreadcrumbInstance, _UniBreadcrumbItem as UniBreadcrumbItem, _UniBreadcrumbItemInstance as UniBreadcrumbItemInstance, _UniBreadcrumbItemProps as UniBreadcrumbItemProps, _UniBreadcrumbProps as UniBreadcrumbProps, _UniCalendar as UniCalendar, _UniCalendarBaseEvent as UniCalendarBaseEvent, _UniCalendarDate as UniCalendarDate, _UniCalendarInstance as UniCalendarInstance, _UniCalendarOnChange as UniCalendarOnChange, _UniCalendarOnChangeEvent as UniCalendarOnChangeEvent, _UniCalendarOnClose as UniCalendarOnClose, _UniCalendarOnConfirm as UniCalendarOnConfirm, _UniCalendarOnConfirmEvent as UniCalendarOnConfirmEvent, _UniCalendarOnMonthSwitch as UniCalendarOnMonthSwitch, _UniCalendarOnMonthSwitchEvent as UniCalendarOnMonthSwitchEvent, _UniCalendarOpen as UniCalendarOpen, _UniCalendarProps as UniCalendarProps, _UniCalendarSelected as UniCalendarSelected, _UniCalendarSelectedElement as UniCalendarSelectedElement, _UniCard as UniCard, _UniCardInstance as UniCardInstance, _UniCardOnClick as UniCardOnClick, _UniCardOnClickType as UniCardOnClickType, _UniCardProps as UniCardProps, _UniCol as UniCol, _UniColInstance as UniColInstance, _UniColProps as UniColProps, _UniColRules as UniColRules, _UniCollapse as UniCollapse, _UniCollapseAccordionOnChange as UniCollapseAccordionOnChange, _UniCollapseAccordionProps as UniCollapseAccordionProps, _UniCollapseAccordionValue as UniCollapseAccordionValue, _UniCollapseBaseProps as UniCollapseBaseProps, _UniCollapseInstance as UniCollapseInstance, _UniCollapseItem as UniCollapseItem, _UniCollapseItemInstance as UniCollapseItemInstance, _UniCollapseItemProps as UniCollapseItemProps, _UniCollapseItemTitleBorder as UniCollapseItemTitleBorder, _UniCollapseNoAccordionOnChange as UniCollapseNoAccordionOnChange, _UniCollapseNoAccordionProps as UniCollapseNoAccordionProps, _UniCollapseNoAccordionValue as UniCollapseNoAccordionValue, _UniCollapseProps as UniCollapseProps, _UniCollapseResize as UniCollapseResize, _UniCombox as UniCombox, _UniComboxInstance as UniComboxInstance, _UniComboxOnInput as UniComboxOnInput, _UniComboxProps as UniComboxProps, _UniComboxValue as UniComboxValue, _UniCountdown as UniCountdown, _UniCountdownInstance as UniCountdownInstance, _UniCountdownOnTimeup as UniCountdownOnTimeup, _UniCountdownOnUpdate as UniCountdownOnUpdate, _UniCountdownProps as UniCountdownProps, _UniDataCheckbox as UniDataCheckbox, _UniDataCheckboxBaseProps as UniDataCheckboxBaseProps, _UniDataCheckboxIcon as UniDataCheckboxIcon, _UniDataCheckboxInstance as UniDataCheckboxInstance, _UniDataCheckboxLocaldata as UniDataCheckboxLocaldata, _UniDataCheckboxLocaldataItem as UniDataCheckboxLocaldataItem, _UniDataCheckboxMap as UniDataCheckboxMap, _UniDataCheckboxMode as UniDataCheckboxMode, _UniDataCheckboxMultipleOnChange as UniDataCheckboxMultipleOnChange, _UniDataCheckboxMultipleOnChangeDetail as UniDataCheckboxMultipleOnChangeDetail, _UniDataCheckboxMultipleOnChangeEvent as UniDataCheckboxMultipleOnChangeEvent, _UniDataCheckboxMultipleProps as UniDataCheckboxMultipleProps, _UniDataCheckboxProps as UniDataCheckboxProps, _UniDataCheckboxSingleOnChange as UniDataCheckboxSingleOnChange, _UniDataCheckboxSingleOnChangeDetail as UniDataCheckboxSingleOnChangeDetail, _UniDataCheckboxSingleOnChangeEvent as UniDataCheckboxSingleOnChangeEvent, _UniDataCheckboxSingleProps as UniDataCheckboxSingleProps, _UniDataCheckboxValue as UniDataCheckboxValue, _UniDataPicker as UniDataPicker, _UniDataPickerClear as UniDataPickerClear, _UniDataPickerHide as UniDataPickerHide, _UniDataPickerInstance as UniDataPickerInstance, _UniDataPickerKey as UniDataPickerKey, _UniDataPickerLocaldata as UniDataPickerLocaldata, _UniDataPickerLocaldataItem as UniDataPickerLocaldataItem, _UniDataPickerMap as UniDataPickerMap, _UniDataPickerOnChange as UniDataPickerOnChange, _UniDataPickerOnChangeDetail as UniDataPickerOnChangeDetail, _UniDataPickerOnNodeclick as UniDataPickerOnNodeclick, _UniDataPickerOnPopupclosed as UniDataPickerOnPopupclosed, _UniDataPickerOnPopupopened as UniDataPickerOnPopupopened, _UniDataPickerOnStepsearch as UniDataPickerOnStepsearch, _UniDataPickerPageData as UniDataPickerPageData, _UniDataPickerProps as UniDataPickerProps, _UniDataPickerShow as UniDataPickerShow, _UniDataPickerSpaceInfo as UniDataPickerSpaceInfo, _UniDataPickerSpaceInfoProvider as UniDataPickerSpaceInfoProvider, _UniDataPickerValue as UniDataPickerValue, _UniDataSelect as UniDataSelect, _UniDataSelectInstance as UniDataSelectInstance, _UniDataSelectLocaldata as UniDataSelectLocaldata, _UniDataSelectLocaldataItem as UniDataSelectLocaldataItem, _UniDataSelectOnChange as UniDataSelectOnChange, _UniDataSelectProps as UniDataSelectProps, _UniDataSelectValue as UniDataSelectValue, _UniDateformat as UniDateformat, _UniDateformatData as UniDateformatData, _UniDateformatInstance as UniDateformatInstance, _UniDateformatLocale as UniDateformatLocale, _UniDateformatProps as UniDateformatProps, _UniDatetimePicker as UniDatetimePicker, _UniDatetimePickerClear as UniDatetimePickerClear, _UniDatetimePickerClose as UniDatetimePickerClose, _UniDatetimePickerEnd as UniDatetimePickerEnd, _UniDatetimePickerInstance as UniDatetimePickerInstance, _UniDatetimePickerOnChange as UniDatetimePickerOnChange, _UniDatetimePickerOnMaskClick as UniDatetimePickerOnMaskClick, _UniDatetimePickerProps as UniDatetimePickerProps, _UniDatetimePickerReturnType as UniDatetimePickerReturnType, _UniDatetimePickerShow as UniDatetimePickerShow, _UniDatetimePickerStart as UniDatetimePickerStart, _UniDatetimePickerType as UniDatetimePickerType, _UniDatetimePickerValue as UniDatetimePickerValue, _UniDrawer as UniDrawer, _UniDrawerClose as UniDrawerClose, _UniDrawerInstance as UniDrawerInstance, _UniDrawerMode as UniDrawerMode, _UniDrawerOnChange as UniDrawerOnChange, _UniDrawerOpen as UniDrawerOpen, _UniDrawerProps as UniDrawerProps, _UniEasyinput as UniEasyinput, _UniEasyinputIconPosition as UniEasyinputIconPosition, _UniEasyinputInstance as UniEasyinputInstance, _UniEasyinputOnBlur as UniEasyinputOnBlur, _UniEasyinputOnBlurDetail as UniEasyinputOnBlurDetail, _UniEasyinputOnBlurEvent as UniEasyinputOnBlurEvent, _UniEasyinputOnChange as UniEasyinputOnChange, _UniEasyinputOnClear as UniEasyinputOnClear, _UniEasyinputOnConfirm as UniEasyinputOnConfirm, _UniEasyinputOnConfirmType as UniEasyinputOnConfirmType, _UniEasyinputOnFocus as UniEasyinputOnFocus, _UniEasyinputOnFocusDetail as UniEasyinputOnFocusDetail, _UniEasyinputOnFocusEvent as UniEasyinputOnFocusEvent, _UniEasyinputOnIconClick as UniEasyinputOnIconClick, _UniEasyinputOnInput as UniEasyinputOnInput, _UniEasyinputProps as UniEasyinputProps, _UniEasyinputStyles as UniEasyinputStyles, _UniEasyinputTrim as UniEasyinputTrim, _UniEasyinputType as UniEasyinputType, _UniEasyinputValue as UniEasyinputValue, _UniFab as UniFab, _UniFabContent as UniFabContent, _UniFabContentItem as UniFabContentItem, _UniFabDirection as UniFabDirection, _UniFabHorizontal as UniFabHorizontal, _UniFabInstance as UniFabInstance, _UniFabOnFabClick as UniFabOnFabClick, _UniFabOnTrigger as UniFabOnTrigger, _UniFabOnTriggerEvent as UniFabOnTriggerEvent, _UniFabPattern as UniFabPattern, _UniFabProps as UniFabProps, _UniFabVertical as UniFabVertical, _UniFav as UniFav, _UniFavContentText as UniFavContentText, _UniFavInstance as UniFavInstance, _UniFavOnClick as UniFavOnClick, _UniFavProps as UniFavProps, _UniFilePicker as UniFilePicker, _UniFilePickerArrayProps as UniFilePickerArrayProps, _UniFilePickerBaseFile as UniFilePickerBaseFile, _UniFilePickerBaseProps as UniFilePickerBaseProps, _UniFilePickerCallbackFile as UniFilePickerCallbackFile, _UniFilePickerClearFiles as UniFilePickerClearFiles, _UniFilePickerFileImage as UniFilePickerFileImage, _UniFilePickerFileMediatype as UniFilePickerFileMediatype, _UniFilePickerFileStatus as UniFilePickerFileStatus, _UniFilePickerFileType as UniFilePickerFileType, _UniFilePickerImageStyles as UniFilePickerImageStyles, _UniFilePickerInstance as UniFilePickerInstance, _UniFilePickerListStyles as UniFilePickerListStyles, _UniFilePickerMode as UniFilePickerMode, _UniFilePickerObjectProps as UniFilePickerObjectProps, _UniFilePickerOnDelete as UniFilePickerOnDelete, _UniFilePickerOnDeleteEvent as UniFilePickerOnDeleteEvent, _UniFilePickerOnFail as UniFilePickerOnFail, _UniFilePickerOnFailEvent as UniFilePickerOnFailEvent, _UniFilePickerOnProgress as UniFilePickerOnProgress, _UniFilePickerOnProgressEvent as UniFilePickerOnProgressEvent, _UniFilePickerOnSelect as UniFilePickerOnSelect, _UniFilePickerOnSelectEvent as UniFilePickerOnSelectEvent, _UniFilePickerOnSuccess as UniFilePickerOnSuccess, _UniFilePickerOnSuccessEvent as UniFilePickerOnSuccessEvent, _UniFilePickerProps as UniFilePickerProps, _UniFilePickerSizeType as UniFilePickerSizeType, _UniFilePickerSizeTypeItem as UniFilePickerSizeTypeItem, _UniFilePickerSourceType as UniFilePickerSourceType, _UniFilePickerSourceTypeItem as UniFilePickerSourceTypeItem, _UniFilePickerTempFile as UniFilePickerTempFile, _UniFilePickerTempFileFile as UniFilePickerTempFileFile, _UniFilePickerUpload as UniFilePickerUpload, _UniFilePickerValue as UniFilePickerValue, _UniForms as UniForms, _UniFormsCallback as UniFormsCallback, _UniFormsClearValidate as UniFormsClearValidate, _UniFormsErrShowType as UniFormsErrShowType, _UniFormsFormat as UniFormsFormat, _UniFormsInstance as UniFormsInstance, _UniFormsItem as UniFormsItem, _UniFormsItemInstance as UniFormsItemInstance, _UniFormsItemLabelAlign as UniFormsItemLabelAlign, _UniFormsItemOnFieldChange as UniFormsItemOnFieldChange, _UniFormsItemProps as UniFormsItemProps, _UniFormsItemRules as UniFormsItemRules, _UniFormsItemRulesRule as UniFormsItemRulesRule, _UniFormsItemSetRules as UniFormsItemSetRules, _UniFormsLabelAlign as UniFormsLabelAlign, _UniFormsLabelPosition as UniFormsLabelPosition, _UniFormsOnValidate as UniFormsOnValidate, _UniFormsProps as UniFormsProps, _UniFormsRules as UniFormsRules, _UniFormsRulesRule as UniFormsRulesRule, _UniFormsSetRules as UniFormsSetRules, _UniFormsValidate as UniFormsValidate, _UniFormsValidateField as UniFormsValidateField, _UniFormsValidateFunction as UniFormsValidateFunction, _UniFormsValidateTrigger as UniFormsValidateTrigger, _UniGoodsNav as UniGoodsNav, _UniGoodsNavButton as UniGoodsNavButton, _UniGoodsNavInstance as UniGoodsNavInstance, _UniGoodsNavOnButtonClick as UniGoodsNavOnButtonClick, _UniGoodsNavOnButtonClickEvent as UniGoodsNavOnButtonClickEvent, _UniGoodsNavOnClick as UniGoodsNavOnClick, _UniGoodsNavOnClickEvent as UniGoodsNavOnClickEvent, _UniGoodsNavOption as UniGoodsNavOption, _UniGoodsNavProps as UniGoodsNavProps, _UniGrid as UniGrid, _UniGridInstance as UniGridInstance, _UniGridItem as UniGridItem, _UniGridItemInstance as UniGridItemInstance, _UniGridItemProps as UniGridItemProps, _UniGridOnChange as UniGridOnChange, _UniGridOnChangeDetail as UniGridOnChangeDetail, _UniGridOnChangeEvent as UniGridOnChangeEvent, _UniGridProps as UniGridProps, _UniGroup as UniGroup, _UniGroupInstance as UniGroupInstance, _UniGroupMode as UniGroupMode, _UniGroupOnClick as UniGroupOnClick, _UniGroupProps as UniGroupProps, _UniIcons as UniIcons, _UniIconsCustomType as UniIconsCustomType, _UniIconsInstance as UniIconsInstance, _UniIconsProps as UniIconsProps, _UniIconsType as UniIconsType, _UniIndexedList as UniIndexedList, _UniIndexedListInstance as UniIndexedListInstance, _UniIndexedListOnClick as UniIndexedListOnClick, _UniIndexedListOnClickEvent as UniIndexedListOnClickEvent, _UniIndexedListOption as UniIndexedListOption, _UniIndexedListProps as UniIndexedListProps, _UniLink as UniLink, _UniLinkInstance as UniLinkInstance, _UniLinkProps as UniLinkProps, _UniList as UniList, _UniListAd as UniListAd, _UniListAdInstance as UniListAdInstance, _UniListAdProps as UniListAdProps, _UniListChat as UniListChat, _UniListChatBadgePositon as UniListChatBadgePositon, _UniListChatInstance as UniListChatInstance, _UniListChatLink as UniListChatLink, _UniListChatOnClick as UniListChatOnClick, _UniListChatOnClickEvent as UniListChatOnClickEvent, _UniListChatProps as UniListChatProps, _UniListInstance as UniListInstance, _UniListItem as UniListItem, _UniListItemDirection as UniListItemDirection, _UniListItemEllipsis as UniListItemEllipsis, _UniListItemExtraIcon as UniListItemExtraIcon, _UniListItemInstance as UniListItemInstance, _UniListItemLink as UniListItemLink, _UniListItemOnClick as UniListItemOnClick, _UniListItemOnClickEvent as UniListItemOnClickEvent, _UniListItemOnSwitchChange as UniListItemOnSwitchChange, _UniListItemOnSwitchChangeEvent as UniListItemOnSwitchChangeEvent, _UniListItemProps as UniListItemProps, _UniListItemSwitchChecked as UniListItemSwitchChecked, _UniListItemThumbSize as UniListItemThumbSize, _UniListProps as UniListProps, _UniLoadMore as UniLoadMore, _UniLoadMoreContentText as UniLoadMoreContentText, _UniLoadMoreIconType as UniLoadMoreIconType, _UniLoadMoreInstance as UniLoadMoreInstance, _UniLoadMoreOnClickLoadMore as UniLoadMoreOnClickLoadMore, _UniLoadMoreOnClickLoadMoreDetail as UniLoadMoreOnClickLoadMoreDetail, _UniLoadMoreOnClickLoadMoreEvent as UniLoadMoreOnClickLoadMoreEvent, _UniLoadMoreProps as UniLoadMoreProps, _UniLoadMoreStatus as UniLoadMoreStatus, _UniNavBar as UniNavBar, _UniNavBarInstance as UniNavBarInstance, _UniNavBarProps as UniNavBarProps, _UniNoticeBar as UniNoticeBar, _UniNoticeBarInstance as UniNoticeBarInstance, _UniNoticeBarOnClick as UniNoticeBarOnClick, _UniNoticeBarOnClose as UniNoticeBarOnClose, _UniNoticeBarOnGetmore as UniNoticeBarOnGetmore, _UniNoticeBarProps as UniNoticeBarProps, _UniNumberBox as UniNumberBox, _UniNumberBoxInstance as UniNumberBoxInstance, _UniNumberBoxOnBlur as UniNumberBoxOnBlur, _UniNumberBoxOnBlurEvent as UniNumberBoxOnBlurEvent, _UniNumberBoxOnChange as UniNumberBoxOnChange, _UniNumberBoxOnFocus as UniNumberBoxOnFocus, _UniNumberBoxOnFocusEvent as UniNumberBoxOnFocusEvent, _UniNumberBoxOnInput as UniNumberBoxOnInput, _UniNumberBoxProps as UniNumberBoxProps, _UniNumberBoxValue as UniNumberBoxValue, _UniPagination as UniPagination, _UniPaginationInstance as UniPaginationInstance, _UniPaginationOnChange as UniPaginationOnChange, _UniPaginationOnChangeEvent as UniPaginationOnChangeEvent, _UniPaginationOnChangeType as UniPaginationOnChangeType, _UniPaginationOnInput as UniPaginationOnInput, _UniPaginationProps as UniPaginationProps, _UniPopup as UniPopup, _UniPopupDialog as UniPopupDialog, _UniPopupDialogInstance as UniPopupDialogInstance, _UniPopupDialogMode as UniPopupDialogMode, _UniPopupDialogOnClose as UniPopupDialogOnClose, _UniPopupDialogOnConfirm as UniPopupDialogOnConfirm, _UniPopupDialogOnConfirmEvent as UniPopupDialogOnConfirmEvent, _UniPopupDialogProps as UniPopupDialogProps, _UniPopupDialogType as UniPopupDialogType, _UniPopupDialogValue as UniPopupDialogValue, _UniPopupInstance as UniPopupInstance, _UniPopupMessage as UniPopupMessage, _UniPopupMessageInstance as UniPopupMessageInstance, _UniPopupMessageProps as UniPopupMessageProps, _UniPopupMessageType as UniPopupMessageType, _UniPopupOnChange as UniPopupOnChange, _UniPopupOnChangeEvent as UniPopupOnChangeEvent, _UniPopupOnMaskClick as UniPopupOnMaskClick, _UniPopupProps as UniPopupProps, _UniPopupShare as UniPopupShare, _UniPopupShareInstance as UniPopupShareInstance, _UniPopupShareOnSelect as UniPopupShareOnSelect, _UniPopupShareOnSelectEvent as UniPopupShareOnSelectEvent, _UniPopupShareProps as UniPopupShareProps, _UniPopupType as UniPopupType, _UniRate as UniRate, _UniRateInstance as UniRateInstance, _UniRateOnChange as UniRateOnChange, _UniRateOnChangeEvent as UniRateOnChangeEvent, _UniRateProps as UniRateProps, _UniRateValue as UniRateValue, _UniRow as UniRow, _UniRowAlign as UniRowAlign, _UniRowInstance as UniRowInstance, _UniRowJustify as UniRowJustify, _UniRowProps as UniRowProps, _UniSearchBar as UniSearchBar, _UniSearchBarBaseEvent as UniSearchBarBaseEvent, _UniSearchBarCancelButton as UniSearchBarCancelButton, _UniSearchBarClearButton as UniSearchBarClearButton, _UniSearchBarInstance as UniSearchBarInstance, _UniSearchBarOnBlur as UniSearchBarOnBlur, _UniSearchBarOnBlurEvent as UniSearchBarOnBlurEvent, _UniSearchBarOnCancel as UniSearchBarOnCancel, _UniSearchBarOnCancelEvent as UniSearchBarOnCancelEvent, _UniSearchBarOnClear as UniSearchBarOnClear, _UniSearchBarOnClearEvent as UniSearchBarOnClearEvent, _UniSearchBarOnConfirm as UniSearchBarOnConfirm, _UniSearchBarOnConfirmEvent as UniSearchBarOnConfirmEvent, _UniSearchBarOnFocus as UniSearchBarOnFocus, _UniSearchBarOnFocusEvent as UniSearchBarOnFocusEvent, _UniSearchBarOnInput as UniSearchBarOnInput, _UniSearchBarOnInputEvent as UniSearchBarOnInputEvent, _UniSearchBarProps as UniSearchBarProps, _UniSearchBarValue as UniSearchBarValue, _UniSection as UniSection, _UniSectionInstance as UniSectionInstance, _UniSectionOnClick as UniSectionOnClick, _UniSectionProps as UniSectionProps, _UniSectionType as UniSectionType, _UniSegmentedControl as UniSegmentedControl, _UniSegmentedControlCurrent as UniSegmentedControlCurrent, _UniSegmentedControlInstance as UniSegmentedControlInstance, _UniSegmentedControlOnClickItem as UniSegmentedControlOnClickItem, _UniSegmentedControlOnClickItemEvent as UniSegmentedControlOnClickItemEvent, _UniSegmentedControlProps as UniSegmentedControlProps, _UniSegmentedControlStyleType as UniSegmentedControlStyleType, _UniSteps as UniSteps, _UniStepsDirection as UniStepsDirection, _UniStepsInstance as UniStepsInstance, _UniStepsOption as UniStepsOption, _UniStepsProps as UniStepsProps, _UniSwipeAction as UniSwipeAction, _UniSwipeActionCloseAll as UniSwipeActionCloseAll, _UniSwipeActionInstance as UniSwipeActionInstance, _UniSwipeActionItem as UniSwipeActionItem, _UniSwipeActionItemInstance as UniSwipeActionItemInstance, _UniSwipeActionItemOnChange as UniSwipeActionItemOnChange, _UniSwipeActionItemOnClick as UniSwipeActionItemOnClick, _UniSwipeActionItemOnClickEvent as UniSwipeActionItemOnClickEvent, _UniSwipeActionItemOnClickEventPosition as UniSwipeActionItemOnClickEventPosition, _UniSwipeActionItemOption as UniSwipeActionItemOption, _UniSwipeActionItemProps as UniSwipeActionItemProps, _UniSwipeActionItemShow as UniSwipeActionItemShow, _UniSwipeActionProps as UniSwipeActionProps, _UniSwipeActionResize as UniSwipeActionResize, _UniSwiperDot as UniSwiperDot, _UniSwiperDotDotsStyles as UniSwiperDotDotsStyles, _UniSwiperDotInstance as UniSwiperDotInstance, _UniSwiperDotMode as UniSwiperDotMode, _UniSwiperDotOnClickItem as UniSwiperDotOnClickItem, _UniSwiperDotProps as UniSwiperDotProps, _UniTable as UniTable, _UniTableClearSelection as UniTableClearSelection, _UniTableInstance as UniTableInstance, _UniTableOnSelectionChange as UniTableOnSelectionChange, _UniTableOnSelectionChangeDetail as UniTableOnSelectionChangeDetail, _UniTableOnSelectionChangeEvent as UniTableOnSelectionChangeEvent, _UniTableProps as UniTableProps, _UniTableSelectionAll as UniTableSelectionAll, _UniTableToggleAllSelection as UniTableToggleAllSelection, _UniTableToggleRowSelection as UniTableToggleRowSelection, _UniTableType as UniTableType, _UniTag as UniTag, _UniTagCustomStyle as UniTagCustomStyle, _UniTagInstance as UniTagInstance, _UniTagOnClick as UniTagOnClick, _UniTagProps as UniTagProps, _UniTagSize as UniTagSize, _UniTagType as UniTagType, _UniTd as UniTd, _UniTdAlign as UniTdAlign, _UniTdInstance as UniTdInstance, _UniTdProps as UniTdProps, _UniTh as UniTh, _UniThAlign as UniThAlign, _UniThFilterData as UniThFilterData, _UniThFilterType as UniThFilterType, _UniThInstance as UniThInstance, _UniThOnFilterChange as UniThOnFilterChange, _UniThOnFilterChangeEvent as UniThOnFilterChangeEvent, _UniThOnSortChange as UniThOnSortChange, _UniThOnSortChangeEvent as UniThOnSortChangeEvent, _UniThProps as UniThProps, _UniTitle as UniTitle, _UniTitleAlign as UniTitleAlign, _UniTitleInstance as UniTitleInstance, _UniTitleProps as UniTitleProps, _UniTitleType as UniTitleType, _UniTooltip as UniTooltip, _UniTooltipInstance as UniTooltipInstance, _UniTooltipProps as UniTooltipProps, _UniTr as UniTr, _UniTrInstance as UniTrInstance, _UniTrProps as UniTrProps, _UniTransition as UniTransition, _UniTransitionConfig as UniTransitionConfig, _UniTransitionInit as UniTransitionInit, _UniTransitionInstance as UniTransitionInstance, _UniTransitionModeClass as UniTransitionModeClass, _UniTransitionOnChange as UniTransitionOnChange, _UniTransitionOnChangeEvent as UniTransitionOnChangeEvent, _UniTransitionOnClick as UniTransitionOnClick, _UniTransitionOnClickEvent as UniTransitionOnClickEvent, _UniTransitionProps as UniTransitionProps, _UniTransitionRun as UniTransitionRun, _UniTransitionStep as UniTransitionStep, _UniTransitionTimingFunction as UniTransitionTimingFunction, _UniTransitionType as UniTransitionType, _UniDataPickerKey, _UniDataPickerValue, _UniIconsCustomType };
