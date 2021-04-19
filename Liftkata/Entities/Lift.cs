using System;
using System.Collections.Generic;
using System.Text;

namespace Lift.Entities
{
    public class Lift
    {
        public int Capacity { get; set; }
        public List<Person> People { get; set; }
        public int CurrentFloor { get; set; }

        public Lift(int capacity)
        {
            this.CurrentFloor = 0;
            this.Capacity = capacity;
        }

        public static void MoveUp()
        {
            if (this.CurrentFloor < Building.Floors.Length())
            {
                this.CurrentFloor = this.CurrentFloor + 1;
            }
        }

        public static void MoveDown()
        {
            if(CurrentFloor > 0)
            {
                this.CurrentFloor = this.CurrentFloor - 1;

            }
        }

        public bool IsFull()
        {
            if(this.People.Count == this.Capacity)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
