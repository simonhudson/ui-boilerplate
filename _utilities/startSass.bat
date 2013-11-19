echo off

set self_path=%~dp0
@pushd %script_dir%
@pushd ..\
set css_path=%cd%\css\
set sass_path=%css_path%sass\
@popd

set ruby_path=\Ruby200-x64\bin
set sass_file_name=sass.scss
set output_file_name=smartsoft.css

echo ************** && echo Start Sass watching your .scss file && echo %sass_file_name% will be converted to %output_file_name% && echo **************
pause

cd "%ruby_path%"
sass --watch "%sass_path%%sass_file_name%:%css_path%%output_file_name%"