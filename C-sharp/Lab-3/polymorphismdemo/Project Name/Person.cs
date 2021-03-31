using System;
using System.Collections.Generic;
using System.Text;

namespace Project_Name
{
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }

        public Person(string Name, int Age)
        {
            this.Name = Name;
            this.Age = Age;
        }
    

        //private string name;
        //public string _Name
        //{
        //    get => name;
        //    set => name = value;
        //}

        public override string ToString()
        {
            string s = Name + " is " + Age + " year old " ;
            Console.WriteLine(s);
            return s;
        }
    }
}

