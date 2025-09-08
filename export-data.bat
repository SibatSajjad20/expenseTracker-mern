@echo off
echo Exporting local MongoDB data...
mongodump --host localhost:27017 --db expenseTracker --out ./backup
echo Data exported to ./backup folder
echo Import to Atlas using: mongorestore --uri "your-atlas-connection-string" ./backup/expenseTracker
pause