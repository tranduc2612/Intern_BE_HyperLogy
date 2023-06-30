using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.common.Req
{
    public class SearchReq
    {
        public int page { get; set; }
        public int size { get; set; }
        public string? searchName { get; set; }

    }
}
