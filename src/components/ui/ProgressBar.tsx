type Props = {
  raised: number
  goal: number
  label?: string
}

export function ProgressBar({ raised, goal, label }: Props) {
  const pct = Math.min(100, Math.round((raised / goal) * 100))
  return (
    <div className="w-full">
      {label && (
        <div className="mb-2 flex justify-between text-sm text-muted">
          <span>{label}</span>
          <span>
            ${raised.toLocaleString()} of ${goal.toLocaleString()}
          </span>
        </div>
      )}
      <div className="h-2 overflow-hidden rounded-full bg-sand">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
