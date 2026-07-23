// ===== 反馈功能（使用 EmailJS） =====

// EmailJS 配置（已替换为你的实际值）
const SERVICE_ID = 'service_1auxwht';
const TEMPLATE_ID = 'feedback_template';
const PUBLIC_KEY = '0fToB59RZVvEZdeD8';

// 加载 EmailJS SDK
(function() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = function() {
        emailjs.init(PUBLIC_KEY);
    };
    document.head.appendChild(script);
})();

function openFeedback() {
    const toolName = document.querySelector('h1')?.textContent?.trim() || 'Unknown Tool';
    const pageUrl = window.location.href;

    let params = '';
    document.querySelectorAll('.field input, .field select').forEach(el => {
        const label = el.closest('.field')?.querySelector('label')?.textContent?.trim() || el.id || 'field';
        const value = el.value || '(空)';
        params += `${label}: ${value}\n`;
    });

    showFeedbackModal(toolName, pageUrl, params);
}

function showFeedbackModal(toolName, pageUrl, params) {
    const existing = document.querySelector('.feedback-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'feedback-modal-overlay';
    overlay.innerHTML = `
        <div class="feedback-modal">
            <h3>📧 Submit Feedback</h3>
            <p style="font-size:0.9rem;color:#94a3b8;margin-bottom:0.8rem;">
                Help us improve ${toolName} — your feedback is valuable!
            </p>
            <div style="margin-bottom:0.8rem;">
                <label style="display:block;font-weight:600;font-size:0.85rem;color:#334155;margin-bottom:0.2rem;">Your Email (optional)</label>
                <input type="email" id="feedbackEmail" placeholder="your@email.com" style="width:100%;padding:0.5rem 0.7rem;border:1.5px solid #dce1e8;border-radius:8px;font-size:0.95rem;" />
            </div>
            <div style="margin-bottom:1rem;">
                <label style="display:block;font-weight:600;font-size:0.85rem;color:#334155;margin-bottom:0.2rem;">What's the issue?</label>
                <textarea id="feedbackMessage" rows="4" placeholder="Describe the problem or your suggestion..." style="width:100%;padding:0.5rem 0.7rem;border:1.5px solid #dce1e8;border-radius:8px;font-size:0.95rem;resize:vertical;font-family:inherit;"></textarea>
            </div>
            <div style="display:flex;gap:0.5rem;justify-content:flex-end;">
                <button onclick="closeFeedbackModal()" style="padding:0.4rem 1.2rem;border:none;border-radius:8px;background:#e9edf2;color:#1e293b;cursor:pointer;font-weight:500;">Cancel</button>
                <button id="sendFeedbackBtn" onclick="sendFeedback()" style="padding:0.4rem 1.2rem;border:none;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:500;">Send Feedback</button>
            </div>
            <div id="feedbackStatus" style="margin-top:0.5rem;display:none;"></div>
        </div>
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function(e) {
        if (e.target === this) closeFeedbackModal();
    });
}

function closeFeedbackModal() {
    const overlay = document.querySelector('.feedback-modal-overlay');
    if (overlay) overlay.remove();
}

function sendFeedback() {
    const message = document.getElementById('feedbackMessage').value.trim();
    if (!message) {
        alert('Please describe the issue or your suggestion.');
        return;
    }

    const toolName = document.querySelector('h1')?.textContent?.trim() || 'Unknown Tool';
    const userEmail = document.getElementById('feedbackEmail').value.trim() || 'anonymous@example.com';
    const pageUrl = window.location.href;

    let params = '';
    document.querySelectorAll('.field input, .field select').forEach(el => {
        const label = el.closest('.field')?.querySelector('label')?.textContent?.trim() || el.id || 'field';
        const value = el.value || '(空)';
        params += `${label}: ${value}\n`;
    });

    const btn = document.getElementById('sendFeedbackBtn');
    const status = document.getElementById('feedbackStatus');

    btn.disabled = true;
    btn.textContent = 'Sending...';
    status.style.display = 'block';
    status.style.color = '#0369a1';
    status.textContent = '📤 Sending feedback...';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        toolName: toolName,
        pageUrl: pageUrl,
        parameters: params || 'No input values',
        message: message,
        userEmail: userEmail
    }).then(function(response) {
        status.style.color = '#10b981';
        status.textContent = '✅ Feedback sent successfully! Thank you! 🎉';
        btn.textContent = '✓ Sent';
        btn.disabled = true;
        setTimeout(() => {
            closeFeedbackModal();
        }, 2000);
    }).catch(function(error) {
        console.error('EmailJS Error:', error);
        status.style.color = '#ef4444';
        status.textContent = '❌ Failed to send. Please try again or email us directly.';
        btn.disabled = false;
        btn.textContent = 'Retry';
    });
}

(function() {
    if (document.querySelector('.feedback-section')) return;

    const main = document.querySelector('main');
    if (!main) return;

    const container = document.createElement('div');
    container.className = 'feedback-section';
    container.innerHTML = `
        <p>⚠️ Found an issue? We take accuracy seriously!</p>
        <button class="fb-btn" onclick="openFeedback()">📧 Submit Feedback</button>
    `;

    main.parentNode.insertBefore(container, main.nextSibling);
})();
