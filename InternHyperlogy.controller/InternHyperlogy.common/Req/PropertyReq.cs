using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.Common.Req
{
    public class PropertyReq
    {
        public string IdProperty { get; set; } = null!;

        public string? NameProperty { get; set; }

        public int? Amount { get; set; }
    }
}
