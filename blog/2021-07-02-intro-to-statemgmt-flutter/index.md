---
title: "state management في فلاتر"
---

 
## معني الـ state management

لو ترجمنا المصطلح حرفيا فمعناه " **تحكم في الحاله** " طب حاله ايه الي هنتحكم فيها ؟

تحكم في الحاله يعني مثلا انت عندك حاجه مرسومه علي الشاشه فيكن مثل Text او Icon او اي Widget
 ليها خصائص لون , حجم خط , طول , عرض . ظل , .....الخ

مجموع الخصائص دي مع بعض اسمهم حاله "state" لل Widget بتاعتك
فليكن الشكل ده مثلا

<!-- truncate -->

 ```dart
return Text(
   'Hello World 👋',
    style: TextStyle(
      color: Colors.blue
   ),
);
 ```
 دلوقتي خصاص ال Text ده فين ؟ انت حطيتها في TextStyle وراح لل build في return ومبقاش عندك اي صلاحية تعدل عليه وده الكود الي عمل الشكل فوق

ازاي هنغير لون الـ Text اثناء التطبيق ما هو شغال (runtime) ?

ممكن نستخدم StatefulWidget ونخزن ال style في متغير ولما نحب نغير نديلو القيمة الجديده ونعمل setState
بكدا احنا عملنا state management بسيط يخليك تتحكم فيه علي مستوي ال Widget/State
:::info
 الحالة المؤقتة (Ephemeral state)
  هي الحالة التي يمكنك احتواؤها بدقة في عنصر واجهة مستخدم واحد

:::note
يطلق ايضا علي الحاله المؤقتة (Ephemeral state)  بالحاله المحليه (Local state)
:::


طب دلوقتي انت تقدر تتحكم في الحاله ب setState ايه الي يخليك محتاج لمكتبه زي بلوك او بروفيدر

حل ال setState هو الصح لو الحاله متخزنه عندك في ال Widget ومفيش حد محتاج يتحكم فيها من مكان تاني

لكن :

*  لو انت محتاج تنقل ال state من widget للثانية ( lifting state up)
* لو انت محتاج تعمل listen علي الـ state  متخزنه في مكان تاني اتغيرت تعمل build تاني علشان تعرض ال ui بتاعتك بالشكل الجديد بعد التغير
* عندك اكتر من child في ال build ولو استخدمت setState كلهم هيبقو مضطرين يعملو build تاني ودي مكلفه من ناحية البطارية واداء التطبيق 

## ليه تستخدم مكتبه لل state management
* فصل ال UI عن الـ state
* اعادة استخدام الـ state
* سهوله كتابه unit test 
* افضل في ال performance اذا استخدمت بشكل صحيح
* مشاكل متنفعش تحلها باستخدام setState  


:::tip
موجود اكثر من مكتبه بطرق مختلفه لل state management وكل واحده منهم ليها مميزات وعيوب واستخدامات مختلفه
تقدر تطلع علي اشهرهم في المىقع الرسمي لفلاتر
[من هنا 🔗](https://docs.flutter.dev/data-and-backend/state-mgmt/options) 
:::


## مصادر هتساعدك اكثر
- 🔗 [Flutter State management from zero to hero [Arabic] عربي](https://youtu.be/TI1XovoHejA?si=p0D7t4zRFFj_bsf5)
- 🔗 [Pragmatic State Management in Flutter (Google I/O'19)](https://youtu.be/d_m5csmrf7I?si=paUJwiVliJLHUJ7q)