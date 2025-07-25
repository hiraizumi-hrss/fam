// SHA-256ハッシュ化関数
async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0')).join('');
}

// 事前にハッシュ化されたパスワード（Izumi4HIRA）
const correctHash = "05199b83e3ec1d8b2b63f2fb3471e6f6f5182ecb506c6160f7209483d12c219f";

async function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const inputHash = await sha256(input);

  if (inputHash === correctHash) {
    // 認証成功 → ポータルページへ遷移
    window.location.href = "portal.html";
  } else {
    document.getElementById("result").textContent = "パスワードが違います";
  }
}
