@ECHO off
FOR /F "usebackq tokens=1,2 delims==" %%i in (`wmic os get LocalDateTime /VALUE 2^>NUL`) do if '.%%i.'=='.LocalDateTime.' SET localDateTimeStamp=%%j
SET localDateTimeStamp=%localDateTimeStamp:~0,4%%localDateTimeStamp:~4,2%%localDateTimeStamp:~6,2%_%localDateTimeStamp:~8,2%%localDateTimeStamp:~10,2%%localDateTimeStamp:~12,6%