using System;

using namespace Day_5
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("Enter your Name");
            var name = Console.ReadLine();
            var data = DateTime.Now;
            Console.WriteLine($" Hello {name} on {data}");
            
            Console.ReadKey(false);
        }
    }
}
