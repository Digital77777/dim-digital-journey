import { COMPARISON, type CompareValue } from "@/content/site";
import { CheckIcon } from "./primitives";

function Cell({ value, label }: { value: CompareValue; label: string }) {
  if (value === "yes") {
    return (
      <td className="px-4 py-3 text-center">
        <CheckIcon className="mx-auto text-primary" />
        <span className="sr-only">Included in {label}</span>
      </td>
    );
  }
  if (value === "soon") {
    return (
      <td className="px-4 py-3 text-center text-xs font-semibold text-purple">
        Coming Soon
        <span className="sr-only"> in {label}</span>
      </td>
    );
  }
  return (
    <td className="px-4 py-3 text-center text-muted-foreground" aria-hidden="false">
      <span aria-hidden="true">—</span>
      <span className="sr-only">Not included in {label}</span>
    </td>
  );
}

export function PricingTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <caption className="sr-only">
          Feature comparison across DIM memberships
        </caption>
        <thead>
          <tr className="border-b border-border bg-surface">
            <th scope="col" className="px-4 py-4 text-left font-display">
              Feature
            </th>
            <th scope="col" className="px-4 py-4 font-display">
              Starter
              <span className="block text-xs font-normal text-muted-foreground">
                Free
              </span>
            </th>
            <th scope="col" className="px-4 py-4 font-display">
              Creator
              <span className="block text-xs font-normal text-muted-foreground">
                R95 / month
              </span>
            </th>
            <th scope="col" className="px-4 py-4 font-display">
              Career
              <span className="block text-xs font-normal text-muted-foreground">
                R250 / month
              </span>
            </th>
            <th scope="col" className="px-4 py-4 font-display">
              8-Month Career
              <span className="block text-xs font-normal text-muted-foreground">
                R1,650 once-off
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((row) => (
            <tr key={row.feature} className="border-b border-border/70 last:border-0">
              <th
                scope="row"
                className="px-4 py-3 text-left font-medium text-navy-soft"
              >
                {row.feature}
              </th>
              <Cell value={row.starter} label="Starter" />
              <Cell value={row.creator} label="Creator" />
              <Cell value={row.career} label="Career" />
              <Cell value={row.program} label="the 8-Month Career Program" />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
