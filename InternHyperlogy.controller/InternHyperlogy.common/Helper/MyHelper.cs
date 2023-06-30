using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.common.Helper
{
    public class MyHelper
    {
        public int CountPagesItems(int size, int amount)
        {
            int pageSize = size; // Số item trên mỗi trang
            int totalPages = (int)Math.Ceiling((double)amount / pageSize);
            return totalPages;
        }

        public string GenerateKey(string key)
        {
            string preFix = key.Substring(0, 2);
            int sufFix = int.Parse(key.Substring(2));
            string newSufFix = "";
            if (sufFix >= 0 && sufFix < 10)
            {
                newSufFix = "0" + sufFix.ToString();
            }
            else
            {
                newSufFix = sufFix.ToString();
            }
            string result = preFix + newSufFix;
            return result;
        }
    }
}
