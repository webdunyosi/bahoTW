document.getElementById("searchInput").addEventListener("input", function() {
  let filter = this.value.toLowerCase();
  let rows = document.querySelectorAll("#gradesTable tbody tr");

  rows.forEach(row => {
      let cells = row.querySelectorAll("td");
      let found = false;

      cells.forEach(cell => {
          if (cell.textContent.toLowerCase().includes(filter)) {
              found = true;
          }
      });

      if (found) {
          row.style.display = "";
      } else {
          row.style.display = "none";
      }
  });
});

// Vazifalarning ballarini hisoblash va foizini chiqarish
document.querySelectorAll(".task").forEach(cell => {
  cell.addEventListener("input", function() {
      let row = this.closest("tr");
      let taskCells = row.querySelectorAll(".task");
      let total = 0;
      let taskCount = taskCells.length;

      // Har bir vazifaning ballarini yig'ish
      taskCells.forEach(taskCell => {
          total += parseFloat(taskCell.textContent) || 0; // Ballarni yig'ish
      });

      // Maksimal ballni belgilash
      let maxTotalPoints = 25; // 6 ta vazifa, har biri maksimal 5 ball

      // O'rtacha foizni hisoblash
      let percentage = (total / maxTotalPoints) * 100;  // 5 ballik tizimda foizni hisoblash

      // Jami ballni foizda ko'rsatish
      let totalCell = row.querySelector(".ball");
      totalCell.textContent = percentage.toFixed(2) + "%"; // O'rtacha foizni chiqarish
  });
});

// Sahifa yuklanganda foizni hisoblash
window.addEventListener('load', function() {
  let rows = document.querySelectorAll("#gradesTable tbody tr");

  rows.forEach(row => {
      let taskCells = row.querySelectorAll(".task");
      let total = 0;

      taskCells.forEach(taskCell => {
          total += parseFloat(taskCell.textContent) || 0; // Ballarni yig'ish
      });

      let maxTotalPoints = 25; // 6 ta vazifa, har biri maksimal 5 ball
      let percentage = (total / maxTotalPoints) * 100;  // foizni hisoblash
      let totalCell = row.querySelector(".ball");
      totalCell.textContent = percentage.toFixed(2) + "%"; // Sahifa yuklanganda foizni chiqarish
  });
});
