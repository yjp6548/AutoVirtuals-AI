// AutoVirtuals AI 配置文件 - 仅需修改以下内容，其他无需动
const CONFIG = {
    // 产品信息（必填）
    productName: "【你的虚拟产品名称，如：AI跨境虚拟产品交付工具箱】", 
    productPrice: "【你的产品价格，如：9.99】", 
    productDesc: "【你的产品描述，如：零代码搭建跨境虚拟产品自动交付系统，支持Web3/传统收款，自动发货！】",
    // Web3收款配置（必填，从你的钱包复制）
    usdtAddress: "【你的TRC20钱包地址，如：Txxxxxxxxxxxxxxxxxxxxxxxxxxxx】", 
    usdcAddress: "【你的Polygon钱包地址，如：0xxxxxxxxxxxxxxxxxxxxxxxxxxxxx】",
    // 传统收款配置（选填，有就填）
    stripeID: "【你的Stripe商户ID，如：pk_test_xxxx】", 
    paypalID: "【你的PayPal商户ID，如：xxxx@xxx.com】",
    // 自动交付配置（必填）
    deliverContent: "【你的产品交付内容，如：下载链接：https://xxx.com/tool.zip | 激活码：8888-8888-8888】",
    // AI客服配置（必填）
    aiReply: "【AI客服默认回复，如：您好！付款后点击「验证付款」即可获取产品，支持USDT/Stripe/PayPal付款，24小时自动交付！】",
};
