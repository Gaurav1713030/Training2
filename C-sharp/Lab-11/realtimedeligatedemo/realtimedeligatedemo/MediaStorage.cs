using System;
using System.Collections.Generic;
using System.Text;

namespace realtimedelegatedemo
{
    public class MediaStorage
    {
        public delegate int PlayerMedia(string a);

        public void ReportResult(PlayerMedia p , string type)
        {
            var status = p(type);
            if(status == 0)
            {
                Console.WriteLine("It will play");
            }
            else
            {
                Console.WriteLine("It will not play");
            }
        }

    }
}
