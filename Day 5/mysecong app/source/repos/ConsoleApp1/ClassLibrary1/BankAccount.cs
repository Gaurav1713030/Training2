using System;
using System.Collections.Generic;
using System.Text;

namespace ClassLibrary1
{
    public class BankAccount
    {
        private static int initialAccountnumber = 123456789;
        List<Transaction> allTransactions = new List<Transaction>();
        public string Number{ get; set; }
        public string Owner { get; set; }
        public decimal Balance { 
            get
            {
                decimal balance = 0;
                foreach(var item in allTransactions)
                {
                    balance += item.Amount;
                    
                }
                return balance;
            }

            set { } }
        public BankAccount(string name, decimal initialBalance)
        {
            this.Number = initialAccountnumber.ToString();
            initialAccountnumber++;
            this.Owner = name;
            MakeDeposit(initialBalance, DateTime.Now, "Initial Balance");

        }
        public BankAccount()
        {

        }
        public void MakeDeposit(decimal amount,DateTime date, string note)
        {
            if(amount<=0)
            {
                throw new ArgumentOutOfRangeException(nameof(amount), "Amount to deposit to be positive");
            }
            var deposit = new Transaction(amount, date, note);
            allTransactions.Add(deposit);

        }
        public void makewithdrawal(decimal amount, DateTime date, string note)
        {
            if (amount <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(amount), "Amount to deposit to be positive");
            }
            if(Balance-amount<0)
            {
                throw new InvalidOperationException("Not Sufficient Fund");

            }
            var withdrwal = new Transaction(-amount, date, note);
            allTransactions.Add(withdrwal);
        }
        public string GetAccountHistory()
        {
            var report = new System.Text.StringBuilder();
            decimal balance = 0;
            report.AppendLine("Date\t\tAmount\t\tBalance\tNote");
            foreach(var item in allTransactions)
            {
                balance += item.Amount;
                report.AppendLine($"{item.Date.ToShortDateString()} \t {item.Amount} \t {balance} \t {item.Notes}");
            }
            return report.ToString();
        }

        
    }
}
