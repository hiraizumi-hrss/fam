const DATA_URL = 'data/seisan.json'; // GitHub Pages上のJSONパス

async function loadData() {
  const res = await fetch(DATA_URL);
  const data = await res.json();
  const tbody = document.querySelector('#seisanTable tbody');
  tbody.innerHTML = '';

  data.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${entry.id}</td>
      <td>${entry.user}</td>
      <td>${entry.item}</td>
      <td>${entry.amount}</td>
      <td>${entry.date}</td>
      <td>${entry.status}</td>
      <td>
        ${entry.status === '未精算' ? `<button onclick="markSettled('${entry.id}')">精算済みにする</button>` : ''}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function markSettled(id) {
  alert(`ID ${id} を精算済みに更新（GitHub API連携が必要）`);
  // GitHub API経由でJSON更新処理を実装（中継サーバ経由）
}

document.getElementById('seisanForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('新規登録処理（GitHub API連携が必要）');
  // 入力値をJSONに追加 → GitHub APIで更新
});

loadData();
