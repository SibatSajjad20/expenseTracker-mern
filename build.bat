@echo off
echo Building frontend...
cd client
call npm run build
cd ..

echo Copying build to server...
xcopy client\dist server\dist /E /I /Y

echo Build complete! Ready for deployment.
pause