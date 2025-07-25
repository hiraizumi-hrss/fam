// SHA-256ハッシュ化関数
async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0')).join('');
}

// 事前にハッシュ化されたパスワード（Izumi4HIRA）
const correctHash = "e3564c1e3cf8d1b5dbd19f6c1dfbb94f87be228f91e26030bcfd5c2d7a1582eb";

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
