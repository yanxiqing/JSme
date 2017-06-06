/**
 * Created by Administrator on 2017/3/1.
 */

function fileSelect1(files) {
    if(files.length)
    {
        var file = files[0];
        var reader = new FileReader();
        reader.onload = function()
        {
            document.JME.readMolFile(this.result);
        };
        reader.readAsText(file);
    }
}


