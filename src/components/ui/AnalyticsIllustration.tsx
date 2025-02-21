import { LineChartIllustration } from "../../../public/images/LineChartIllustration";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../Table";

const summary = [
  {
    name: "Loyalty Program",
    value: "21,349",
    signups: "1,245",
    engagement: "14.3 min",
    retention: "+7.8%",
    revenue: "+4.9%",
    satisfaction: "4.7",
    bgColor: "bg-blue-500",
    changeType: "positive",
  },
  {
    name: "Online Booking",
    value: "25,943",
    signups: "N/A",
    engagement: "11.7 min",
    retention: "+5.6%",
    revenue: "+2.9%",
    satisfaction: "4.2",
    bgColor: "bg-purple-500",
    changeType: "positive",
  },
  {
    name: "Customer Support Chat",
    value: "9,443",
    signups: "N/A",
    engagement: "8.5 min",
    retention: "+3.3%",
    revenue: "-1.2%",
    satisfaction: "4.5",
    bgColor: "bg-green-500",
    changeType: "mixed",
  },
];

export default function ProductPerformance() {
  return (
    <div className="h-150 shrink-0 overflow-hidden [mask-image:radial-gradient(white_30%,transparent_90%)] perspective-[4000px] perspective-origin-center">
      <div className="-translate-y-10 -translate-z-10 rotate-x-10 rotate-y-20 -rotate-z-10 transform-3d">
        <h3 className="text-sm text-gray-500">Product Performance</h3>
        <p className="mt-1 text-3xl font-semibold text-gray-900">
          56,735 feature interactions
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700">+4,230 interactions (8.1%)</span>{" "}
          <span className="font-normal text-gray-500">Past month</span>
        </p>
        <LineChartIllustration className="mt-8 w-full min-w-200 shrink-0" />

        <TableRoot className="mt-6 min-w-200">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Feature</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Total Users
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Loyalty Sign Ups
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Avg. Engagement
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Retention
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Revenue Impact
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  User Satisfaction
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summary.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium text-gray-900">
                    <div className="flex space-x-3">
                      <span
                        className={item.bgColor + " w-1 shrink-0 rounded"}
                        aria-hidden="true"
                      />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.value}</TableCell>
                  <TableCell className="text-right">{item.signups}</TableCell>
                  <TableCell className="text-right">
                    {item.engagement}
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : item.changeType === "negative"
                            ? "text-red-700"
                            : "text-yellow-600"
                      }
                    >
                      {item.retention}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        Number.parseFloat(item.revenue) > 0
                          ? "text-emerald-700"
                          : "text-red-700"
                      }
                    >
                      {item.revenue}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-gray-900">{item.satisfaction}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot>
      </div>
    </div>
  );
}
