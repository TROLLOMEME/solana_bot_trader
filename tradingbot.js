// جایگزین setInterval با یک سرور ساده + Cron (اختیاری)
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`سرور در حال اجراست روی پورت ${PORT}`);
  // اجرای اولیه ربات
  tradingBot();
  // اجرای هر 5 دقیقه (میتونی از Cron استفاده کنی)
  setInterval(tradingBot, 5 * 60 * 1000);
});
