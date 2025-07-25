// 初期化時にフォームへデフォルトアカウントを入力
window.onload = function () {
  document.getElementById("username").value = "hiraizumi"; // アカウントは自動入力
  document.getElementById("password").value = "";          // パスワードは空白
};

// 認証処理
function login() {
  const inputUser = document.getElementById("username").value.trim();
  const inputPass = document.getElementById("password").value.trim();

  fetch("users.json")
    .then((response) => response.json())
    .then((users) => {
      const validUser = users.find(
        (user) => user.username === inputUser && user.password === inputPass
      );

      if (validUser) {
        alert("ログイン成功！");
        // 認証後の処理をここに記述
        window.location.href = "portal.html";
      } else {
        alert("ユーザー名またはパスワードが違います");
      }
    })
    .catch((error) => {
      console.error("ユーザー情報読み込みエラー:", error);
      alert("内部エラーが発生しました");
    });
}
