// 页面加载完成后初始化
window.onload = function() {
    // 加载产品信息
    document.getElementById('productName').innerText = CONFIG.productName;
    document.getElementById('productDesc').innerText = CONFIG.productDesc;
    document.getElementById('productPrice').innerText = '$' + CONFIG.productPrice;
    
    // 加载收款地址
    document.getElementById('usdtAddress').innerText = CONFIG.usdtAddress;
    document.getElementById('usdcAddress').innerText = CONFIG.usdcAddress;
    
    // 加载AI客服默认回复
    document.getElementById('aiReply').innerText = CONFIG.aiReply;
};

// 复制收款地址到剪贴板
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('地址复制成功！');
    }).catch(err => {
        alert('复制失败，请手动复制：' + text);
    });
}

// 跳转到传统支付页面（Stripe/PayPal）
function redirectToPayment() {
    alert('已跳转到Stripe/PayPal付款页面，付款完成后自动返回！');
    // 实际部署时替换为你的Stripe/PayPal付款链接
    window.open('https://pay.stripe.com/xxx' || 'https://paypal.me/xxx', '_blank');
}

// 验证付款并显示交付内容
function verifyPayment() {
    // 模拟付款验证（实际部署时对接区块链/支付平台API）
    alert('付款验证成功！正在为你显示产品...');
    document.getElementById('deliverContent').innerHTML = `<p>${CONFIG.deliverContent}</p>`;
}

// AI客服发送消息
function sendMsg() {
    const userMsg = document.getElementById('userMsg').value;
    if (!userMsg) return alert('请输入你的问题！');
    
    // 模拟AI回复（实际部署时对接GPT/Claude API）
    const aiResponse = `AI客服回复：${userMsg} - ${CONFIG.aiReply}`;
    document.getElementById('aiReply').innerText = aiResponse;
    document.getElementById('userMsg').value = '';
}
