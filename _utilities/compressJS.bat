ECHO off

REM **************************
REM Uses the YUI compressor
REM **************************

REM SET self_path=%~dp0
ECHO off

REM **************************
REM Uses the YUI compressor
REM **************************

SET self_path=%~dp0
@pushd %script_dir%
@pushd ..\
SET js_path=%cd%\js\
SET js_output_file_name=smartsoft.min.js
SET js_tmp=smartsoft.tmp.js
@popd

ECHO Compresses all .js files into a single .js file called "%js_output_file_name%".
PAUSE

REM Delete any existing .min file
IF EXIST %js_path%%js_output_file_name% DEL %js_path%%js_output_file_name%

REM Concatenate all js files into a tmp file
COPY %js_path%*.js %js_path%%js_tmp% /b

REM Minify the .concatenated file into the .min file
java -jar yuicompressor-2.4.2.jar %js_path%%js_tmp% -o %js_path%%js_output_file_name%

REM Delete the tmp
DEL %js_path%%js_tmp%

IF ERRORLEVEL 1 (
	ECHO *ERROR* - Sorry, your JS has not been compiled.
) ELSE (
	ECHO Success! Your compiled JS is now in "%js_output_file_name%"
)
PAUSE