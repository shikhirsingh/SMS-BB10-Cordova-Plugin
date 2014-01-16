# SMS for BB10 Cordova / Webworks

The purpose of this Cordova/Webworks plugin is to allow developers to send an SMS from within a Cordova/Webworks project for BlackBerry 10. 
This plugin differs from [invoke](https://developer.blackberry.com/html5/documentation/beta/text_messages.html) 
because the Cordova app itself can send the SMS, where as the invoke feature will launch the SMS app. 

The sample code for this application is Open Source under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).

**Applies To**

* [BlackBerry Native SDK](http://developer.blackberry.com/native/)

**Author** 

* [Shikhir Singh](http://code.shikhir.com/)
* [Martin Woolley](https://github.com/mdwoolley)


**Release History**

* **V1.0.0** - Initial release

**Dependencies**

1. Minimal requirement for BlackBerry 10 Device Software is **10.0.9**
2. Minimal requirement for BlackBerry 10 Native SDK is **10.0.9**
3. Minimal requirement for BlackBerry 10 Webworks is **2.0**


**How to install this extension**

1. In command prompt while in your project directory, type: cordova plugin add <path to the /plugin/ directory>
2. Include the bbSMS.js file in your project (file is located at SMSPlugin-DemoApp/www/js/)
3. In the config.xml of your project add the following permissions (see the config.xml in /SMSPlugin-DemoApp/www for an example)

```
	<rim:permissions>
	    <rim:permit>access_pimdomain_messages</rim:permit>
	    <rim:permit>access_sms_mms</rim:permit>
	    <rim:permit>access_phone</rim:permit>
	</rim:permissions>
```

**Usage**


bbSMS.send(phonenumber, message, person<optional>);


Example:
```
 
var result=bbSMS.send("2124537535", "What's up Barack?", "Barack Obama" );
if(result===false){
	console.log('SMS Plugin is not installed. You need to run the command : cordova plugin add ../plugin');
}
else{
	if(result.success==false){
	// did you forget a parameter?
		console.log(result.result);
	}
	else{
		console.log('SMS has been sent!');
		alert('SMS has been sent!');
	}
}
```
 
**How to Build SMS for BB10 Cordova**

Assumption: You have installed the BlackBerry Native SDK 2.0+, and BlackBerry Webworks 2.0+

1. Simply import the NDK_project directory into a workspace in your NDK. Build the project. 
2. After building the NDK Project, copy the contents of the NDK_project directory into plugin/src/blackberry10/native - Here is the command: cp -R NDK_project/ plugin/src/blackberry10/native 
3. Go to the SMSPlugin-DemoApp directory, then add the plugin using the following command: cordova plugin add ../plugin/
4. Now you can build the project using : cordova build --release --keystorepass YOUR_PASSWORD_GOES_HERE -buildId 1 

**How can I know that this plugin actually works without building it all myself!**

If you don't want to build this sample application yourself we've included a pre-built and signed BAR file. 
You can find it in the folder /build folder. 


**Tested on**

1. Z30 running v10.2
2. Q10 running v10.1


**Known Issues**

None! 


## Contributing Changes

Please see the [README](https://github.com/blackberry/Cascades-Community-Samples/blob/master/README.md) of the Cascades-Community-Samples repository for instructions on how to add new Samples or make modifications to existing Samples.


## Bug Reporting and Feature Requests

If you find a bug in a Sample, or have an enhancement request, simply file an [Issue](https://github.com/blackberry/WebWorks-Community-APIs/issues) for the Sample and send a message (via github messages) to the Sample Author(s) to let them know that you have filed an [Issue](https://github.com/blackberry/WebWorks-Community-APIs/issues). If you have a solution to an issue you can contribute your fix and issue a Pull Request to have it reviewed and integrated into the main repo.


## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE 
AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.