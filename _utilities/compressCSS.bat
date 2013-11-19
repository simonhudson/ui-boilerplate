ECHO off

REM **************************
REM Uses the YUI compressor
REM **************************

SET self_path=%~dp0
@pushd %script_dir%
@pushd ..\
SET css_path=%cd%\css\
SET css_output_file_name=smartsoft.min.css
SET css_tmp=smartsoft.tmp.css
@popd

ECHO Compresses all .css files into a single .css file called "%css_output_file_name%".
PAUSE

REM Delete any existing .min file
IF EXIST %css_path%%css_output_file_name% DEL %css_path%%css_output_file_name%

REM Concatenate all css files into a tmp file
COPY %css_path%*.css %css_path%%css_tmp% /b

REM Minify the .concatenated file into the .min file
java -jar yuicompressor-2.4.2.jar %css_path%%css_tmp% -o %css_path%%css_output_file_name%

REM Delete the tmp
DEL %css_path%%css_tmp%

IF ERRORLEVEL 1 (
	ECHO *ERROR* - Sorry, your CSS has not been compiled.
) ELSE (
	ECHO Success! Your compiled CSS is now in "%css_output_file_name%"
)
PAUSE