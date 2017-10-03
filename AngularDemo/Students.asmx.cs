using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;

namespace AngularDemo
{
    /// <summary>
    /// Summary description for Students1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class Students1 : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetallStudents()

        {
            List<Students> listStudents = new List<Students>();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {


                SqlCommand cmd = new SqlCommand("select * from tblstudents", con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())

                {
                    Students students = new Students();
                    students.ID= Convert.ToInt32(rdr["ID"]);
                    students.Name = Convert.ToString(rdr["Name"]);
                    students.Gender = Convert.ToString(rdr["Gender"]);
                    students.City = Convert.ToString(rdr["City"]);
                    listStudents.Add(students);

                }


            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(listStudents));


        }


        [WebMethod]
        public void GetStudentByName( string Name)

        {
            Students student = new Students();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {


                SqlCommand cmd = new SqlCommand("select * from tblstudents where name like @Name", con);
                SqlParameter param = new SqlParameter()
                {
                    ParameterName = "@Name",
                    Value = Name + "%"

                };
                cmd.Parameters.Add(param);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())

                {
                    //Students students = new Students();
                    student.ID = Convert.ToInt32(rdr["ID"]);
                    student.Name = Convert.ToString(rdr["Name"]);
                    student.Gender = Convert.ToString(rdr["Gender"]);
                    student.City = Convert.ToString(rdr["City"]);
                    //student.Add(students);

                }


            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(student));


        }

        [WebMethod]
        public void GetStudents( int id)

        {
            Students student = new Students();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {


                SqlCommand cmd = new SqlCommand("select * from tblstudents where id= @ID", con);
                SqlParameter param = new SqlParameter()
                {
                    ParameterName = "@ID",
                    Value=id

                };
                cmd.Parameters.Add(param);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())

                {
                    // Students students = new Students();
                    student.ID = Convert.ToInt32(rdr["ID"]);
                    student.Name = Convert.ToString(rdr["Name"]);
                    student.Gender = Convert.ToString(rdr["Gender"]);
                    student.City = Convert.ToString(rdr["City"]);
                    

                }


            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(student));


        }
    }
}
