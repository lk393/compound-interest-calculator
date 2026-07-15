function calculate() {
    // 获取用户输入的四个值
    const P = parseFloat(document.getElementById('principal').value);
    const r = parseFloat(document.getElementById('rate').value) / 100;
    const n = parseInt(document.getElementById('frequency').value);
    const t = parseInt(document.getElementById('years').value);

    const P = parseFloat(document.getElementById('principal').value);
    const r = parseFloat(document.getElementById('rate').value) / 100;
    const n = parseInt(document.getElementById('frequency').value);
    const t = parseInt(document.getElementById('years').value);
    const M = parseFloat(document.getElementById('monthly').value) || 0;   // 👈 新增这一行

    // 如果任何输入无效，停止计算
    if (isNaN(P) || isNaN(r) || isNaN(n) || isNaN(t) || isNaN(M) || P < 0 || r < 0 || t < 0 || M < 0) {
        document.getElementById('final-balance').textContent = '—';
        document.getElementById('total-interest').textContent = '—';
        document.getElementById('effective-rate').textContent = '—';
        return;
    }

    // 复利公式（含每月定投）：
    // 最终金额 = 本金部分 + 定投部分
    const FV_principal = P * Math.pow(1 + r / n, n * t);
    const FV_contribution = M * (Math.pow(1 + r / n, n * t) - 1) / (r / n);
    const A = FV_principal + FV_contribution;
    const interest = A - P - M * t * 12;
    const effectiveRate = (Math.pow(1 + r / n, n) - 1) * 100;

    // 格式化为美元货币
    const fmt = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // 显示结果[reference:12]
    document.getElementById('final-balance').textContent = fmt.format(A);
    document.getElementById('total-interest').textContent = fmt.format(interest);
    document.getElementById('effective-rate').textContent = effectiveRate.toFixed(2) + '%';
}

// 页面加载时自动计算
calculate();

// 用户修改任何输入时，实时重新计算[reference:13]
document.querySelectorAll('input, select').forEach(function(el) {
    el.addEventListener('input', calculate);
});