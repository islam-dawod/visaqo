import { PlaneIcon, IdIcon, CheckCircleIcon } from "./Icons";

const STEPS = [
  { label: "Trip Details", Icon: PlaneIcon },
  { label: "Your info", Icon: IdIcon },
  { label: "Checkout", Icon: CheckCircleIcon },
];

// active: 0 = Trip Details, 1 = Your info, 2 = Checkout
export default function StepIndicator({ active }: { active: number }) {
  return (
    <div className="mx-auto flex max-w-xl items-center justify-between">
      {STEPS.map((s, i) => {
        const done = i < active;
        const current = i === active;
        const on = done || current;
        return (
          <div key={s.label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center">
              <span
                className={`grid h-11 w-11 place-items-center rounded-full transition-colors ${
                  on
                    ? "bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft"
                    : "bg-brand-50 text-ink-muted"
                }`}
              >
                <s.Icon className="h-5 w-5" />
              </span>
              <span
                className={`mt-2 whitespace-nowrap text-sm font-semibold ${
                  current ? "text-brand-600" : on ? "text-ink" : "text-ink-muted"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className={`mx-2 mb-6 h-[3px] flex-1 rounded-full ${
                  done ? "bg-brand" : "bg-black/10"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
