﻿using Grains.Interfaces.Observers;
using System.Threading.Tasks;

namespace Grains.Interfaces.Grains
{
    public interface IMyFirstGrain : ISubscribeGrain<IHelloObserver>
    {
        Task ChatAsync(string message);
    }
}
