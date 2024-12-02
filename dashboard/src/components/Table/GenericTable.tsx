import React from 'react';

interface TableProps<T> {
    data: T[];
    renderCell?: (key: keyof T, item: T) => React.ReactNode;
}

const GenericTable = <T extends object>({ data, renderCell }: TableProps<T>) => {
    // Dynamically derive columns based on data keys
    const columns = data.length > 0 ? Object.keys(data[0]) as Array<keyof T> : [];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gray-200 dark:bg-gray-800">
                <tr>
                    {columns.map((column, index) => (
                        <th
                            key={index}
                            className="px-6 py-3 border-b border-gray-300 dark:border-gray-700 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            {String(column).toUpperCase()}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((item, rowIndex) => (
                    <tr key={rowIndex} className="even:bg-gray-100 dark:even:bg-gray-700">
                        {columns.map((column, colIndex) => (
                            <td
                                key={colIndex}
                                className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-gray-100"
                            >
                                {renderCell ? renderCell(column, item) : String(item[column])}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default GenericTable;