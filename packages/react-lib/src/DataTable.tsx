
export default function DataTable({ headers = [], items = [] }) {
  const visibleHeaders = headers.filter((h) => h.visible !== false)

  return (
    <div>
      <table className="font-mono min-w-full divide-y divide-gray-300 shadow rounded">
        <thead>
          <tr className="h-10 bg-neutral-200">
            {visibleHeaders.map((header) => (
              <th
                key={header.key}
                className="text-sm font-semibold text-gray-900 text-left px-2"
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {items.map((item, index) => (
            <tr
              key={index}
              className={`h-10 hover:bg-primary/20 ${
                index % 2 === 0 ? 'bg-white' : 'bg-neutral-100'
              }`}
            >
              {visibleHeaders.map((header) => (
                <td
                  key={header.key}
                  className={`whitespace-nowrap px-2 text-sm text-dark ${header.class || ''}`}
                >
                  {item[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
