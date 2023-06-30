using AutoMapper;
using InternHyperlogy.Common.DTO;
using InternHyperlogy.model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.Common.Helper
{
    public class Mapper
    {
        private readonly IMapper _mapper;
        public Mapper() { 
            var config = new MapperConfiguration(config =>
            {
                config.CreateMap<Staff, StaffDTO>().ReverseMap();
                config.CreateMap<Property, PropertyDTO>().ReverseMap();
            });

            _mapper = config.CreateMapper();
        }

        public StaffDTO MapStaffToDTO(Staff staff)
        {
            return _mapper.Map<StaffDTO>(staff);
        }

        public Staff MapDTOToStaff(StaffDTO staffDTO)
        {
            return _mapper.Map<Staff>(staffDTO);
        }
        public PropertyDTO MapPropertyToDTO(Property property)
        {
            return _mapper.Map<PropertyDTO>(property);
        }
        public Property MapDTOToTaiSan(PropertyDTO propertyDTO)
        {
            return _mapper.Map<Property>(propertyDTO);
        }

        public List<StaffDTO> MapStaffsToDTOs(List<Staff> staffs)
        {
            return _mapper.Map<List<StaffDTO>>(staffs);
        }

        public List<PropertyDTO> MapPropertiesToDTOs(List<Property> properties)
        {
            return _mapper.Map<List<PropertyDTO>>(properties);
        }

    }
}
