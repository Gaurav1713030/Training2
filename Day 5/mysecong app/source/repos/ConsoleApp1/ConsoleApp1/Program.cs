using System;
using ClassLibrary1;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var acc1 = new BankAccount("foo", 100000);
            acc1.makewithdrawal(5000, DateTime.Now, "first w");
            Console.WriteLine(acc1.GetAccountHistory());

            try {
                acc1.MakeDeposit(6000, DateTime.Now, "First Deposit");
            }
            catch(Exception e)            {
                Console.WriteLine(e.Message);
            }
            Console.WriteLine(acc1.GetAccountHistory());
            var acc2 = new BankAccount("foo", 100000);
            acc1.makewithdrawal(5000, DateTime.Now, "first w");
            Console.WriteLine(acc2.GetAccountHistory());

            try
            {
                acc1.MakeDeposit(8000, DateTime.Now, "First Deposit");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            Console.WriteLine(acc2.GetAccountHistory());

        }
    }
}
