import { Locator, expect } from "@playwright/test";


export async function verifyVisble(locator:Locator)
{
await expect (locator).toBeVisible();
}

export async function verifyNotVisbile(locator:Locator) 
{
await expect(locator).not.toBeVisible();    
}

export function isAscending(
    values: number[]
)
{
    for (let i = 0; i < values.length - 1; i++)
    {
        if (values[i] > values[i + 1])
        {
            return false;
        }
    }
    return true;
}