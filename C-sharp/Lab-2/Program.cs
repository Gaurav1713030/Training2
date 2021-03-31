
using ClassLibrary1;
using System;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            var acc1 = new BankAccount("Foo", 100000);
            //Console.WriteLine(acc1.Balance);
            acc1.MakeWithDrawal(5000, DateTime.Now, "first w");
            //Console.WriteLine(acc1.Balance);
            try
            {
                acc1.MakeWithDrawal(6000, DateTime.Now, "first deposite");
                //Console.WriteLine(acc1.Balance);
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
            Console.WriteLine(acc1.GetAccountHistory());
            Console.WriteLine("FOR ACCOUNT 2");

            var acc2 = new BankAccount("FFF", 500000);
            //Console.WriteLine(acc1.Balance);
            acc1.MakeWithDrawal(5000, DateTime.Now, "SECOND w");
            //Console.WriteLine(acc1.Balance);
            try
            {
                acc1.MakeWithDrawal(6000, DateTime.Now, "SECOND deposite");
                //Console.WriteLine(acc1.Balance);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            Console.WriteLine(acc2.GetAccountHistory());

        }
    }
}
