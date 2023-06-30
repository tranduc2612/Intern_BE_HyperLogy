using System;
using System.Collections.Generic;

namespace InternHyperlogy.model.Models;

public partial class Property
{
    public string IdProperty { get; set; } = null!;

    public string? NameProperty { get; set; }

    public string? IdStaff { get; set; }

    public int? Amount { get; set; }

    public DateTime? TimeCreate { get; set; }

    public DateTime? TimeUpdate { get; set; }
}
