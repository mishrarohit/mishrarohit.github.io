---
comments: true
date: 2011-12-16 03:07:44
layout: post
slug: installing-android-sdk-on-ubuntu-1110
title: Installing Android SDK on Ubuntu 11.10
wordpress_id: 138
categories:
- Hacking
tags:
- Android
- Eclipse
- Ubuntu
---

The first step in installing the Android SDK is installing the Sun (Oracle) JDK. Java 7 is out now, but I will stick with the recommended Java 6. Sun JDK is not available in the Ubuntu repositories, so you need to install it using this method.



	
  1. Open Ubuntu Software Center, using the Super (Windows) Key and searching for Software Center.

	
  2. Search for Synaptic Package Manager and install it.

	
  3. Start Synaptic (using the same Super Key + search term method)

	
  4. Click on Settings/Repositories.

	
  5. Click on "Other Software" Tab and click ADD. In the APT line copy this: ppa:ferramroberto/java

	
  6. Click Add Source and then Add Volume and close.

	
  7. Back in Synaptic window, click on reload. Once reloaded,Â in the quick filter field type java6.

	
  8. Click and Mark for Installation these items:Â sun-java6-bin, sun-java6-jre, sun-java6-jdk, sun-java6-plugin.

	
  9. Click Apply. Packages will be downloaded and you will have to accept the License Agreement. You are done with installing Sun JDK.

	
  10. Now, go back to the Software Center and search for Eclipse. Click on Install. Alternatively, you can download Eclipse IDE for Java Developers from [this link.
](http://eclipse.org/downloads/)


Now lets install the ADT Plugin for Eclipse. Detailed instructions are provided for doing so on the Android Developer website, but I am copying them here anyways for easy reference.


### Downloading the ADT Plugin


Use the Update Manager feature of your Eclipse installation to install the latest revision of ADT on your development computer.<>

Assuming that you have a compatible version of the Eclipse IDE installed, as described inÂ [Preparing for Installation](http://developer.android.com/sdk/eclipse-adt.html#preparing), above, follow these steps to download the ADT plugin and install it in your Eclipse environment.



	
  1. Start Eclipse, then selectÂ **Help**Â >Â **Install New Software...**.

	
  2. ClickÂ **Add**, in the top-right corner.

	
  3. In the Add Repository dialog that appears, enter "ADT Plugin" for theÂ _Name_Â and the following URL for theÂ _Location_:

    
    https://dl-ssl.google.com/android/eclipse/




	
  4. ClickÂ **OK**Note: If you have trouble acquiring the plugin, try using "http" in the Location URL, instead of "https" (https is preferred for security reasons).

	
  5. In the Available Software dialog, select the checkbox next to Developer Tools and clickÂ **Next**.

	
  6. In the next window, you'll see a list of the tools to be downloaded. ClickÂ **Next**.

	
  7. Read and accept the license agreements, then clickÂ **Finish**.Note: If you get a security warning saying that the authenticity or validity of the software can't be established, clickÂ **OK**.

	
  8. When the installation completes, restart Eclipse.




### Configuring the ADT Plugin


After you've successfully downloaded the ADT as described above, the next step is to modify your ADT preferences in Eclipse to point to the Android SDK directory:




	
    1. SelectÂ **Window**Â >Â **Preferences...**Â to open the Preferences panel.

	
    2. SelectÂ **Android**Â from the left panel.



You may see a dialog asking whether you want to send usage statistics to Google. If so, make your choice and clickÂ **Proceed**. You cannot continue with this procedure until you clickÂ **Proceed**.



	
  1. For theÂ _SDK Location_Â in the main panel, clickÂ **Browse...**Â and locate your downloaded SDK directory.

	
  2. ClickÂ **Apply**, thenÂ **OK**.


Now, go to Window - Android SDK Manager. Install the Android versions that you want to develop for. Android 2.1 is supported on majority of Android devices and you should target your app to run on 2.1 You can find detailed instructions about working with the Android SDK manager at the Android Developer website. [http://developer.android.com/sdk/installing.html](http://developer.android.com/sdk/installing.html)

You are now ready to start developing your Android application. You can do a quick Hello World by following [this link](http://developer.android.com/resources/tutorials/hello-world.html)Â or go to the [Dev Guide](http://developer.android.com/guide/index.html). If you are interested in a book to get you started, I will recommend Apress' Beginning Android 2 ([Amazon](http://www.amazon.com/gp/product/B003VPWYCI/ref=as_li_qf_sp_asin_tl?ie=UTF8&tag=rohmissweb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=B003VPWYCI)![](http://www.assoc-amazon.com/e/ir?t=rohmissweb-20&l=as2&o=1&a=B003VPWYCI)
 / [Flipkart](http://www.flipkart.com/books/8184897243?affid=rohitrohit1) )


