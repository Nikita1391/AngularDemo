using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularDemo
{
    public class Country
    {

        public int ID { get; set; }
        public string Name { get; set; }
        public List<City> cities { get; set; }
    }
}