package Helper;

public class HelperConstants {
    public static final int WaitCondition_TitleContains = 0;
    public static final int WaitCondition_ElementToBeClickable = 1;
    public static final int WaitCondition_SearchSourceComponentIndex = 2;
    public static final int WaitCondition_NumberOfElementsMoreThan = 3;
    public static final int WaitCondition_ElementToBeLoaded = 4;
    public static final int WaitCondition_AttributeNotToBeEmpty = 5;
    public static final String Null_String = "--------------";
    public static final int TimeToWait = 10;
    public static final int TimeToWaitImage = 3;

    public class IP{
        public static final String Address_Index = "http://35.246.60.249/";
        public static final String Address_Details = Address_Index + "details.html?id=";
        public static final String Address_Duplicates = Address_Index + "duplicates.html";
        public static final String Address_Duplicates_Free = Address_Index + "duplicatesFree.html";
    }

    public class Fail {
        public static final String String_Not_Recognized = "String is not recognized";
        public static final String XPath_Empty = "XPath came empty. Verify if the XPath is correct";
        public static final String Chunks_Empty = "HelperConstants.Fail.Chunks_Empty";
        public static final String Alarm_Not_Exist = "Alert doesn't exist";
        public static final String Back_Button_Not_Exist = "Back Button doesn't exist";
        public static final String Image_Not_Exist = "Page Image doesn't exist";
    }
}
