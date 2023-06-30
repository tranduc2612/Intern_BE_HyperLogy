using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.Common.DTO
{
    public class PropertyDTO
    {
        public string IdProperty { get; set; } = null!;

        public string? NameProperty { get; set; }

        public string? IdStaff { get; set; }

        public int? Amount { get; set; }

        public DateTime? TimeCreate { get; set; }

        public DateTime? TimeUpdate { get; set; }
    }
}
