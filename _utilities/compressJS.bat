ECHO off

REM **************************
REM Uses the YUI compressor
REM **************************

REM SET self_path=%~dp0
REM @pushd %script_dir%
REM @pushd ..\
SET js_path=..\js\
SET js_concatenated=smartset.concatenated.js
SET js_output_file_name=smartset.min.js
REM @popd

ECHO Compresses all .js files into a single .js file called "%js_output_file_name%".
PAUSE

REM Delete existing minified file
IF EXIST %js_path%%js_output_file_name% del /F %js_path%%js_output_file_name%

REM Concatenate all JS files into a .concatenated file
COPY %js_path%*.js %js_path%%js_concatenated% /b

REM Minify the .concatenated file into the .min file
java -jar yuicompressor-2.4.2.jar %js_path%%js_concatenated% -o %js_path%%js_output_file_name%

REM Delete the concatenated file
IF EXIST %js_path%%js_concatenated% del /F %js_path%%js_concatenated%

IF ERRORLEVEL 1 (
	ECHO *ERROR* - Sorry, your JavaScript has not been compiled.
) ELSE (
	ECHO Success! Your compiled JavaScript is now in "%js_output_file_name%"
)
PAUSE