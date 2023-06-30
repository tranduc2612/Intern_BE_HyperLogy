using InternHyperlogy.business.Services;
using InternHyperlogy.common.Req;
using InternHyperlogy.Common.Req;
using InternHyperlogy.Rsp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InternHyperlogy.controller.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private readonly IPropertyService _propertyService;

        public PropertyController(IPropertyService propertyService)
        {
            _propertyService = propertyService;
        }
        [HttpGet("{id}")]
        public Response GetPropertyById(string id)
        {
            try
            {
                return _propertyService.GetById(id);
            }
            catch (Exception ex)
            {
                var resErr = new Response();
                resErr.SetError(ex.Message);
                return resErr;
            }
        }

        [HttpPost]
        public Response GetList([FromBody] SearchReq searchInfo) {
            try
            {
                return _propertyService.Pagination(searchInfo);
            }
            catch (Exception ex)
            {
                var resErr = new Response();
                resErr.SetError(ex.Message);
                return resErr;
            }
        }

        [HttpPost("Add")]
        public Response AddProperty(PropertyReq tsRequest)
        {
            try
            {
                return _propertyService.Add(tsRequest);
            }
            catch (Exception ex)
            {
                var resErr = new Response();
                resErr.SetError(ex.Message);
                return resErr;
            }
        }

        [HttpPatch]
        public Response UpdateProperty(PropertyReq tsRequest)
        {
            try
            {
                return _propertyService.Update(tsRequest);
            }
            catch (Exception ex)
            {
                var resErr = new Response();
                resErr.SetError(ex.Message);
                return resErr;
            }
        }

        [HttpDelete("{id}")]
        public Response DeleteProperty(string id)
        {
            try
            {
                return _propertyService.Delete(id);
            }
            catch (Exception ex)
            {
                var resErr = new Response();
                resErr.SetError(ex.Message);
                return resErr;
            }
        }

    }
}
