using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Serialization;



namespace AngularDemo
{
    /// <summary>
    /// Summary description for countryservice
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class countryservice : System.Web.Services.WebService
    {

        [WebMethod]
        public void Getdata()
        {
            List<Country> listcountries = new List<Country>();

             string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
             using (SqlConnection con = new SqlConnection(cs))

            {

                SqlCommand cmd = new SqlCommand("select * from tblcountry;select * from tblcity", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                da.Fill(ds);
                DataView dataview = new DataView(ds.Tables[1]);


                foreach (DataRow countryDataRow in ds.Tables[0].Rows)
                {


                    Country country = new Country();
                    country.ID = Convert.ToInt32(countryDataRow["ID"]);
                    country.Name = Convert.ToString(countryDataRow["Name"]);
                    dataview.RowFilter = "CountryID= '" + country.ID + "'";
                    List<City> listcities = new List<City>();

                    foreach (DataRowView cityDataRowView in dataview)
                    {
                        DataRow citydataRow = cityDataRowView.Row;
                        City city = new City();
                        city.ID = Convert.ToInt32(citydataRow["ID"]);
                        city.Name = citydataRow["Name"].ToString();
                        city.CountryId = Convert.ToInt32(citydataRow["CountryId"]);
                        listcities.Add(city);


                    }

                    country.cities = listcities;
                    listcountries.Add(country);



                }   
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(listcountries));
        }
    }
}
