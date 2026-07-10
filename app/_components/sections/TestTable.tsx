import { GradientBadge } from "../ui/GradientBadge";
import { ButtonLink } from "../ui/GradientButton";
import { tests } from "../../_lib/data";

export function TestTable() {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Test</th>
            <th>Signal</th>
            <th>Access</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {tests.map((test) => (
            <tr key={test.slug}>
              <td>
                <strong className="strong">{test.title}</strong>
                <br />
                <span className="muted">{test.meta}</span>
              </td>
              <td>
                <GradientBadge label={test.status} tone={test.tone} />
              </td>
              <td><span className="muted">{test.price}</span></td>
              <td>
                <ButtonLink href={`/app/tests/${test.slug}`} variant="secondary" compact>
                  Open
                </ButtonLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
