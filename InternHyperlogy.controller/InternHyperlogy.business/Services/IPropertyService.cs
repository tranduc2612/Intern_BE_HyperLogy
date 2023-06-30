using InternHyperlogy.common.Req;
using InternHyperlogy.Common.Req;
using InternHyperlogy.Rsp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.business.Services
{
    public interface IPropertyService
    {
        Response GetById(string id);
        Response Add(PropertyReq pro);
        Response Update(PropertyReq pro);
        Response Delete(string id);
        Response Pagination(SearchReq searchReq);
    }
}
