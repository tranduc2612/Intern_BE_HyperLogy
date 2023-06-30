using InternHyperlogy.model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.common.ViewModels
{
    public class InfoPageViewModel
    {
        public int totalItem { get; set; }
        public int currentPage { get; set; }
        public int totalPage { get; set; }
        public int pageSize { get; set; }
        public Object data { get; set; }
    }
}
